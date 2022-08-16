using DataModel;

namespace Akkatecture.Example.RentAStream.Web.ViewModels;

public class UserDemographics
{
    public Guid Id { get; set; }
    public string Username { get; set; }
    public string Name { get; set; }
    public decimal TotalDue { get; set; }
}

public class UserAccount
{
}

public class UserPayment
{
}
