using Akkatecture.Aggregates;
using Akkatecture.Commands;

namespace Rentastream.Domain.Aggregates.Account;

public class AccountManager : AggregateManager<Account, AccountId, Command<Account, AccountId>>
{
    
}