
create database if not exists burgers_db;
use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(100) not null,
    devoured bool default false,
    primary key (id)
);

insert into burgers (burger_name, devoured) values ("Veggie Burger", true);
insert into burgers (burger_name, devoured) values ("Trash Burger", false);
insert into burgers (burger_name, devoured) values ("Mystery Burger", false);
