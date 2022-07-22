
CREATE USER ras_user WITH ENCRYPTED PASSWORD 'ras_password';
GRANT CONNECT ON DATABASE rentastream TO ras_user;
GRANT USAGE ON SCHEMA public TO ras_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public to ras_user;

CREATE TABLE "Account"
(
    id   serial
        constraint account_pk
            primary key,
    name varchar not null
);

alter table "Account"
    owner to ras_user;

create unique index account_id_uindex
    on "Account" (id);
