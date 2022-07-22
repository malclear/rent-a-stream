using LinqToDB.Configuration;
using LinqToDB;
using LinqToDB.Data;
using Akkatecture.Example.RentAStream.Web.Models;

namespace Akkatecture.Example.RentAStream.Web.Data;

public class AppDataConnection: DataConnection
{
    public ITable<Account> Account => this.GetTable<Account>();
    
    public AppDataConnection(LinqToDBConnectionOptions<AppDataConnection> options)
        :base(options)
    {
    }
}
