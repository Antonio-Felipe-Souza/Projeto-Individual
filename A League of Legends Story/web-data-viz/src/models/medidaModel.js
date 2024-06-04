var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `select usuario, sum(pontuacao) as pontuacao, idPartida from jogador join partida on idJogador = fkJogador where idJogador = '${idUsuario}' group by usuario, idPartida order by idPartida desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasEstat() {

    var instrucaoSql = `select distinct nomeElo, count(eloFinal.fkJogador) as contagem
    from jogador join partida on idJogador = partida.fkJogador join eloFinal on partida.idPartida = eloFinal.fkPartida and partida.fkJogador = eloFinal.fkJogador 
    where idEloFinal in (select MAX(idEloFinal) from eloFinal join partida on idPartida = eloFinal.fkPartida join jogador on idJogador = partida.fkJogador where eloFinal.fkJogador is not null group by eloFinal.fkJogador)
    group by nomeElo`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasEstat
}
