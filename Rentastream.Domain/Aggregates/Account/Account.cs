using Akka.Actor;
using Akkatecture.Aggregates;
using Akkatecture.Aggregates.ExecutionResults;

namespace Rentastream.Domain.Aggregates.Account;

public class Account: AggregateRoot<Account, AccountId, AccountState>,
    IExecute<CreateAccount>
{
    public Account(AccountId id) : base(id)
    {
    }

    public bool Execute(CreateAccount command)
    {
        if (IsNew)
        {
            Emit(new AccountCreated(command.Email, command.Username ));
            Sender.Tell(new SuccessExecutionResult());
        }
        else
        {
            Sender.Tell(new FailedExecutionResult(new[] {$"the account, {command.AggregateId.Value}, already exists"}));
        }

        return true;
    }
}
