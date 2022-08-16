namespace Akkatecture.Example.RentAStream.Web.ViewModels;

public class MovieHeader
{
    public MovieHeader()
    {
    }

    // public MovieHeader(string code, string title)
    // {
    //     //TODO Get rid of this; make it simpler
    //     Code = code;
    //     Title = title;
    // }

    public string Code { get; set; }
    public string Title { get; set; }
}

public class MovieLicense : MovieHeader
{
    public string LicenseType{ get; set; }
}
