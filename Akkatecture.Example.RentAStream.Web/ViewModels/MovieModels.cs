namespace Akkatecture.Example.RentAStream.Web.Models;

public class MovieHeader
{
    public MovieHeader(int num)
    {
        Name = "foo_{num}";
    }

    public string Name { get; private set; }
}


public class MovieDetails
{
    
}
