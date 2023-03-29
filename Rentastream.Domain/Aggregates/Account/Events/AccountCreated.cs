using System.Threading.Tasks;
using Akka.Actor;
using Akkatecture.Aggregates;
using Akkatecture.Aggregates.ExecutionResults;
using Akkatecture.Core;
using Akkatecture.Events;

namespace Rentastream.Domain.Aggregates.Account;

[EventVersion("AccountCreated", 1)]
public class AccountCreated : AggregateEvent<Account, AccountId>
{
    public AccountCreated(string email, string username)
    {
        Email = email;
        Username = username; 
    }

    // Properties of events should be 'get' only.
    public string Email { get; }
    public string Username { get; }
}
