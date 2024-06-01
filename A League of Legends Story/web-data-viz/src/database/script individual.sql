create database lol;
use lol;

create table jogador (
idJogador int primary key auto_increment,
usuario varchar (45) not null unique,
email varchar (45) not null unique,
senha varchar (45) not null,
dataRegistro datetime default current_timestamp);

create table partida (
idPartida int primary key auto_increment,
pontuacao char(2),
fkJogador int, foreign key (fkJogador) references jogador(idJogador));

create table eloFinal(
idEloFinal int primary key auto_increment,
pontosFinais varchar(45),
nomeElo varchar(45),
fkPartida int, foreign key (fkPartida) references partida(idPartida)
);

select * from jogador;
select * from partida;
select * from eloFinal;


SELECT usuario, pontosFinais, nomeElo, idPartida FROM jogador
                        LEFT JOIN partida ON idJogador = fkJogador
                        LEFT JOIN eloFinal ON idPartida = fkPartida WHERE idJogador = '2'
                        ORDER BY idPartida DESC;


select usuario, pontosFinais, nomeElo, idPartida from jogador left join partida on idJogador = fkJogador left join eloFinal on idPartida = fkPartida order by idPartida desc;

SELECT jogador.usuario, eloFinal.pontosFinais, eloFinal.nomeElo, partida.idPartida
FROM jogador 
LEFT JOIN partida ON jogador.idJogador = partida.fkJogador 
LEFT JOIN eloFinal ON partida.idPartida = eloFinal.fkPartida 
WHERE jogador.usuario = 'rayssa'
ORDER BY partida.idPartida DESC;


-- USAR ISSO PRA FAZER OUTRO GRÁFICO... ABAIXO VAI SER O USUÁRIO E OS PONTOS FINAIS NUM GRÁFICO DE BARRA
SELECT jogador.usuario, MAX(pontosFinais) AS pontosFinais, MAX(nomeElo) AS nomeElo, MAX(idPartida) AS idPartida 
FROM jogador 
LEFT JOIN partida ON jogador.idJogador = partida.fkJogador 
LEFT JOIN eloFinal ON partida.idPartida = eloFinal.fkPartida 
GROUP BY jogador.usuario 
ORDER BY idPartida DESC;