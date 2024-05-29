create database lol;
use lol;

create table registrar (
id int primary key auto_increment,
usuario varchar (45),
email varchar (45),
senha varchar (45));

select * from registrar;

create table partida (
idPartida int primary key auto_increment,
eloFinal varchar (45),
fkUsuario int, foreign key (fkUsuario) references registrar(id),
pontuacao char(2)
);