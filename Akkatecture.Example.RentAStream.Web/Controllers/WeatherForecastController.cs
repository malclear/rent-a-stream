using Akkatecture.Example.RentAStream.Web.Data;
using LinqToDB;
using Microsoft.AspNetCore.Mvc;

namespace Akkatecture.Example.RentAStream.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    private readonly AppDataConnection _connection;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, AppDataConnection connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet]
    public async Task<IEnumerable<WeatherForecast>> Get()
    {
        var accounts = await _connection.Account.ToArrayAsync();
        return accounts.Select(index => new WeatherForecast
             {
                 Date = DateTime.Now.AddDays(index.Id),
                 TemperatureC = Random.Shared.Next(-20, 55),
                 Summary = index.Name 
             })
             .ToArray();       
         
         // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
         //    {
         //        Date = DateTime.Now.AddDays(index),
         //        TemperatureC = Random.Shared.Next(-20, 55),
         //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
         //    })
         //    .ToArray();
    }
}
