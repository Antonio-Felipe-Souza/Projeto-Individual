var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT usuario, pontosFinais, nomeElo, idPartida FROM jogador 
                        LEFT JOIN partida ON idJogador = fkJogador 
                        LEFT JOIN eloFinal ON idPartida = fkPartida WHERE idJogador = '${idUsuario}'
                        ORDER BY idPartida DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
}
