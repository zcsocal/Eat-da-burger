-- create database if not exists burgers_db;
-- use burgers_db;

-- create table burgers (
-- 	id int not null auto_increment,
--     burger_name varchar(100) not null,
--     devoured bool default false,
--     primary key (id)
-- );

create table burgers (
	id int auto_increment not null ,
    burger_name varchar(100) not null,
    devoured bool default false,
    createdAt timestamp not null,
    primary key (id)
);




