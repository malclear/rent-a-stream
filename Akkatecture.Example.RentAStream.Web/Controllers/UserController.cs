using Akkatecture.Example.RentAStream.Web.Models;
using DataModel;
using Microsoft.AspNetCore.Mvc;

namespace Akkatecture.Example.RentAStream.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly RentastreamDb _connection;

    public UserController(ILogger<UserController> logger, RentastreamDb connection)
    {
        _logger = logger;
        _connection = connection;
    }
   
    [HttpGet]
    [Route("{controller}/{userId}")]
    public UserDemographics Get(string userId)
    {
        var id = Guid.Parse(userId);
        // var userDemographics = await from p in _connection.Users where p.Id == id select new UserDemographics(p);
        var user = _connection.Users.Where(p => p.Id == id).SingleOrDefault();
        return new UserDemographics(user);
    }

    [HttpPost]
    public async Task<ActionResult<UserDemographics>> Post(UserDemographics user)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    [Route("{controller}/{userId}/movies")]
    public async Task<IEnumerable<MovieHeader>> GetAllMovies(string userId)
    {
        return Enumerable.Range(1, 5).Select(index =>
            new MovieHeader(index));
    }
    
    [HttpGet]
    [Route("{controller}/{userId}/account")]
    public async Task<UserAccount> GetUserAccount(string userId)
    {
        return new UserAccount();
    }
    
    [HttpGet]
    [Route("{controller}/{userId}/payments")]
    public async Task<IEnumerable<UserPayment>> GetUserPayments(string userId)
    {
        return null;
    }
    
    [HttpPost]
    [Route("{controller}/{userId}/payments")]
    public async Task<IEnumerable<UserPayment>> GetUserPayments(string userId, UserPayment payment)
    {
        return null;
    }
}
