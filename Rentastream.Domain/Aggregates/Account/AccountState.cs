using Akkatecture.Aggregates;

namespace Rentastream.Domain.Aggregates.Account;

public class AccountState : AggregateState<Account, AccountId>, 
    IApply<AccountCreated>
{
    public void Apply(AccountCreated aggregateEvent)
    {
        throw new NotImplementedException();
    }
}