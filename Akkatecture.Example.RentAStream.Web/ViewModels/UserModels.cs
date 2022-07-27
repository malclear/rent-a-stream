using DataModel;

namespace Akkatecture.Example.RentAStream.Web.Models;

public class UserDemographics
{
    public Guid UserId { get; private set; }
    public string Username { get; private set; }
    public decimal TotalDue { get; private set; }
    public UserDemographics(User user)
    {
        UserId = user.Id;
        Username = user.Username;
        TotalDue = user.TotalDue;
    }
}

public class UserAccount
{
}

public class UserPayment
{
}
