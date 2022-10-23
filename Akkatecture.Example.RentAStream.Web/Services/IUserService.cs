using DataModel;

namespace Akkatecture.Example.RentAStream.Web.Services;

public interface IUserService
{
    
}

public class UserService : IUserService
{
    private readonly RentastreamDb _connection;
    private readonly ILogger<UserService> _logger;

    public UserService(ILogger<UserService> logger, RentastreamDb connection)
    {
        _logger = logger;
        _connection = connection;
    }
}
