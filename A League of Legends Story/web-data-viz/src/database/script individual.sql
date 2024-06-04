create database lol;
use lol;

create table jogador (
idJogador int primary key auto_increment,
usuario varchar (45) not null unique,
email varchar (45) not null unique,
senha varchar (45) not null,
dataRegistro datetime default current_timestamp);

create table partida (
idPartida int  auto_increment,
pontuacao varchar(45),
fkJogador int, foreign key (fkJogador) references jogador(idJogador),
primary key (idPartida, fkJogador));

create table eloFinal(
idEloFinal int primary key auto_increment,
pontosFinais varchar(45),
nomeElo varchar(45),
fkPartida int, foreign key (fkPartida) references partida(idPartida),
fkJogador int, foreign key (fkJogador) references jogador (idJogador)
);

select * from jogador;
select * from partida;
select * from eloFinal;

-- SELECT OFICIAL DA API DE CHART LINE
select usuario, sum(pontuacao) as pontuacao, idPartida from jogador join partida on idJogador = fkJogador where idJogador = '1' group by usuario, idPartida order by idPartida desc;

-- funciona, mas não é ideal
select usuario, sum(pontuacao) from partida join jogador on idJogador = fkJogador group by usuario;


-- select pro grafico de barras
select distinct nomeElo, count(eloFinal.fkJogador) as contagem
from jogador join partida on idJogador = partida.fkJogador join eloFinal on partida.idPartida = eloFinal.fkPartida and partida.fkJogador = eloFinal.fkJogador 
where idEloFinal in (select MAX(idEloFinal) from eloFinal join partida on idPartida = eloFinal.fkPartida join jogador on idJogador = partida.fkJogador where eloFinal.fkJogador is not null group by eloFinal.fkJogador)
group by nomeElo;




-- VERIFICAÇÕES JUNTO COM A PROF VIVIAN
select MAX(idEloFinal)
from eloFinal join partida on idPartida = eloFinal.fkPartida join jogador on idJogador = partida.fkJogador where eloFinal.fkJogador is not null group by eloFinal.fkJogador;

select nomeElo, count(distinct partida.fkJogador) from jogador join partida on idJogador = partida.fkJogador join eloFinal on partida.idPartida = eloFinal.fkPartida and partida.fkJogador = eloFinal.fkJogador
	where eloFinal.fkJogador in (select MAX(idEloFinal) from eloFinal join partida on idPartida = eloFinal.fkPartida join jogador on idJogador = partida.fkJogador group by eloFinal.fkJogador) group by nomeElo;

select MAX(idEloFinal), nomeElo, count(distinct eloFinal.fkJogador) from eloFinal join partida on idPartida = eloFinal.fkPartida join jogador on idJogador = partida.fkJogador 
group by eloFinal.fkJogador, nomeElo;


-- USAR ISSO PRA FAZER OUTRO GRÁFICO... ABAIXO VAI SER O USUÁRIO E OS PONTOS FINAIS NUM GRÁFICO DE BARRA
SELECT jogador.usuario, MAX(pontosFinais) AS pontosFinais, MAX(nomeElo) AS nomeElo, MAX(idPartida) AS idPartida 
FROM jogador 
LEFT JOIN partida ON jogador.idJogador = partida.fkJogador 
LEFT JOIN eloFinal ON partida.idPartida = eloFinal.fkPartida 
GROUP BY jogador.usuario 
ORDER BY idPartida DESC;