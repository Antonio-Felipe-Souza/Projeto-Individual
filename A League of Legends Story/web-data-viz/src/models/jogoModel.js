var database = require("../database/config")

function inserir(pontosFinaisServer, fkJogador, rodadasServer) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (idPartida, pontuacao, fkJogador) VALUES ('${rodadasServer}', '${pontosFinaisServer}', '${fkJogador}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPontos(pontosFinaisServer, eloServer, rodadasServer, fkJogadorServer) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO eloFinal (idEloFinal, pontosFinais, nomeElo, fkPartida, fkJogador) VALUES (default, '${pontosFinaisServer}', '${eloServer}', '${rodadasServer}', '${fkJogadorServer}')
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    inserir,
    atualizarPontos
}