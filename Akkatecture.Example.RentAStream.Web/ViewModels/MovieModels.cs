namespace Akkatecture.Example.RentAStream.Web.ViewModels;

public class MovieHeader
{
    public MovieHeader()
    {
    }

    public string Code { get; set; }
    public string Title { get; set; }
    public string PosterImage { get; set; }
    public string ShortDescription { get; set; }
}

public class MovieLicense : MovieHeader
{
    public string LicenseType{ get; set; }
    public DateTime? ValidUntil { get; set; }
}
