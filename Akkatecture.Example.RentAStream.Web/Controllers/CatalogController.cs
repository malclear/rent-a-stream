using Akkatecture.Example.RentAStream.Web.ViewModels;
using DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Akkatecture.Example.RentAStream.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CatalogController: ControllerBase
{
    private readonly ILogger<CatalogController> _logger;
    private readonly RentastreamDb _connection;

    public CatalogController(ILogger<CatalogController> logger, RentastreamDb connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet]
    public async Task<IEnumerable<MovieHeader>> Get()
    {
        _logger.LogInformation("In CatalogController");
        return Enumerable.Range(1, 5).Select(index =>
            new MovieHeader(index));
    }
}
