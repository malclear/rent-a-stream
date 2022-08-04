namespace Akkatecture.Example.RentAStream.Web.ViewModels;

public class MovieHeader
{
    public MovieHeader(int num)
    {
        Name = $"foo_{num}";
        Id = num;
        IsOwned = num % 2 == 0;
    }

    public int Id { get; private set; }
    public string Name { get; private set; }
    public bool IsOwned { get; private set; }
}


public class MovieDetails { }
