using DataModel;

namespace Akkatecture.Example.RentAStream.Web.ViewModels;

public class UserDemographics
{
    public Guid Id { get; private set; }
    public string Username { get; private set; }
    public decimal TotalDue { get; private set; }
    public UserDemographics(User user)
    {
        Id = user.Id;
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
