using Akkatecture.Core;
using Akkatecture.ValueObjects;
using Newtonsoft.Json;

namespace Rentastream.Domain.Aggregates.Account;

[JsonConverter(typeof(SingleValueObjectConverter))]
public class AccountId : Identity<AccountId>
{
    public AccountId(string value) : base(value)
    {
    }
}