using Akkatecture.Example.RentAStream.Web.ViewModels;
using DataModel;
using LinqToDB;
using Microsoft.AspNetCore.Mvc;

namespace Akkatecture.Example.RentAStream.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
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
    [Route("{userId}")]
    public ActionResult<UserDemographics> Get(Guid userId)
    {
        var user = _connection.Projections.Users.SingleOrDefault(p => p.Id == userId);
        if (user == null)
            return NotFound();
        
        return new OkObjectResult( new UserDemographics
        {
            Id = user.Id,
            Name = user.Name,
            Username = user.Username
        });
    }
    
    [HttpPost]
    [Route("{username}/login")]
    public async Task<ActionResult<UserDemographics>> Post(string username)
    {
        // Ignore the password because we're not doing security here.
        var user = _connection.Projections.Users.SingleOrDefault(p => p.Username == username);
        
        if (user == null) return NotFound();
        
        var demographics = new UserDemographics
        {
            Id = user.Id, 
            Name = user.Name, 
            Username = user.Username 
        };
        return new OkObjectResult(demographics);
    }
    
    [HttpPost]
    [Route("{userId}")]
    public async Task<ActionResult<UserDemographics>> Post(UserDemographics user)
    {
        throw new NotImplementedException();
    }
    
    [HttpGet]
    [Route("{userId}/movies")]
    public async Task<IEnumerable<MovieLicense>> GetAllMoviesForUser(Guid userId)
    {
        // TODO Move this to a service
        
        var query = from userMovie in _connection.Projections.UserMovies
            join movie in _connection.Config.CatalogListings on userMovie.MovieCode equals movie.MovieCode
            where userMovie.UserId == userId
            select new
            {
                movie.MovieCode,
                movie.MovieTitle,
                movie.PosterImage,
                movie.ShortDescription,
                userMovie.LicenseType,
                userMovie.ValidUntil
            }; 
        
        // var userMovies = (await query.ToListAsync()).Select(um => new MovieLicense
        //     {
        //         Code = um.MovieCode,
        //         Title = um.MovieTitle,
        //         ShortDescription = um.ShortDescription,
        //         PosterImage = um.PosterImage,
        //         LicenseType = um.LicenseType,
        //         ValidUntil = um.ValidUntil?.DateTime
        //     })
        //     .ToList();
        
            
          var userMovies =  (await query.ToListAsync()).Select(um => new MovieLicense
            {
                Code = um.MovieCode,
                Title = um.MovieTitle,
                ShortDescription = um.ShortDescription,
                PosterImage = um.PosterImage,
                LicenseType = um.LicenseType,
                ValidUntil = um.ValidUntil?.DateTime
            })
            .ToList();        
        
        return userMovies;
    }

    [HttpGet]
    [Route("{userId}/account")]
    public async Task<UserAccount> GetUserAccount(string userId)
    {
        return new UserAccount();
    }
    
    [HttpGet]
    [Route("{userId}/payments")]
    public async Task<IEnumerable<UserPayment>> GetUserPayments(string userId)
    {
        return null;
    }
    
    [HttpPost]
    [Route("{userId}/payments")]
    public async Task<IEnumerable<UserPayment>> GetUserPayments(string userId, UserPayment payment)
    {
        return null;
    }
}
