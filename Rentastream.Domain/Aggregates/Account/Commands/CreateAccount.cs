using Akkatecture.Commands;

namespace Rentastream.Domain.Aggregates.Account;

public class CreateAccount : Command<Account, AccountId>
{
    public string Email { get; }
    public string Username { get; }
    
    public CreateAccount(AccountId aggregateId, string username, string email) : base(aggregateId)
    {
        Username = username;
        Email = email;
    }

    /// <summary>
    /// Ctor including a CommandId. This can assist in correlation when the client is retaining the commandId.
    /// </summary>
    /// <param name="aggregateId"></param>
    /// <param name="sourceId"></param>
    public CreateAccount(AccountId aggregateId, CommandId sourceId, string username, string email) : base(aggregateId, sourceId)
    {        
        Username = username;
        Email = email;
    }
}
