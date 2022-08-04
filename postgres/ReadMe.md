
To generate the model of the database, use the command:

> dotnet linq2db scaffold -p PostgreSQL -c "Server=localhost;Port=5432;Database=rentastream;User Id=ras_user;Password=ras_password;Pooling=true;MinPoolSize=0;MaxPoolSize=100;Connection Lifetime=0;"
 
### Application Description

[[akkatecture]]
[[rentastream]]
[[full-example-ideas]]

The domain will be related to billing, similar to RCM's. The functionality will allow someone to do the following activities:
- buy or rent movies
- view their bill
- pay their bill
- receive notifications when their bill is due, or overdue
- see the movies available to them, both
    - owned and
      -rented, with remaining days in rental
- fake "watch a movie"
