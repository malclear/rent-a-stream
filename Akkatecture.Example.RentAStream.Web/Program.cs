using Akkatecture.Example.RentAStream.Web.Models;
using DataModel;
using LinqToDB;
using LinqToDB.AspNet;
using LinqToDB.AspNet.Logging;
using LinqToDB.Configuration;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddLinqToDBContext<RentastreamDb>((provider, options) =>
{
    options.UsePostgreSQL(builder.Configuration.GetConnectionString("Default"))
        .UseDefaultLogging(provider);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
using (var scope = app.Services.CreateScope())
{
    var dataConnection = scope.ServiceProvider.GetService<RentastreamDb>()!;
    // dataConnection.CreateTable<Account>();
}

app.Run();
