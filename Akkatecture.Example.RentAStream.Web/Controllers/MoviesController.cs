using Akkatecture.Example.RentAStream.Web.ViewModels;
using DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Akkatecture.Example.RentAStream.Web.Controllers;

public class MoviesController: ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly RentastreamDb _connection;

    public MoviesController(ILogger<UserController> logger, RentastreamDb connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet]
    public async Task<IEnumerable<MovieHeader>> Get()
    {
        return Enumerable.Range(1, 5).Select(index =>
            new MovieHeader(index));
    }

}
