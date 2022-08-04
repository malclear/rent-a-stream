
create database rentastream
    with owner = postgres
    encoding = 'utf8'
    connection limit = -1;

\connect rentastream

create schema readmodels
    authorization postgres;

create schema journal
    authorization postgres;

create table readmodels.account
(
    id   uuid    not null,
    name varchar not null
);

alter table readmodels.account
    owner to postgres;

create unique index account_id_uindex
    on readmodels.account (id);

create user ras_user with encrypted password 'ras_password';
grant connect on database rentastream to ras_user;

grant usage on schema readmodels to ras_user;
grant select, insert, update, delete on all tables in schema readmodels to ras_user;

grant usage on schema journal to ras_user;
grant select, insert on all tables in schema journal to ras_user;

-- alter table "account"
--     owner to ras_user;
