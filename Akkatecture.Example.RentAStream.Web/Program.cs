using Akka.Actor;
using DataModel;
using LinqToDB.AspNet;
using LinqToDB.AspNet.Logging;
using LinqToDB.Configuration;
using Akka.Hosting;
using Rentastream.Domain.Aggregates.Account;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name:"devOnlyPolicy",builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllersWithViews();
builder.Services.AddLinqToDBContext<RentastreamDb>((provider, options) =>
{
    options.UsePostgreSQL(builder.Configuration.GetConnectionString("Default"))
        .UseDefaultLogging(provider);
});

builder.Services.AddAkka("rent-a-stream", cb =>
{
    cb.WithActors((system, registry) =>
    {
        var accountManager = system.ActorOf(Props.Create(() => new AccountManager()));
        registry.TryRegister<AccountManager>(accountManager); // register for DI
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseCors("devOnlyPolicy");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
using (var scope = app.Services.CreateScope())
{
    var dataConnection = scope.ServiceProvider.GetService<RentastreamDb>()!;
    // dataConnection.CreateTable<Account>();
}

app.Run();
