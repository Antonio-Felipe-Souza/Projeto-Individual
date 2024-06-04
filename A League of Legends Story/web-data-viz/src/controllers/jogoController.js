var jogoModel = require("../models/jogoModel");

function inserir(req,res){
    var pontosFinaisServer = req.body.pontosFinaisServer;
    var fkJogador = req.body.fkJogadorServer;
    var rodadasServer = req.body.rodadasServer;


    jogoModel.inserir(pontosFinaisServer, fkJogador, rodadasServer)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",                  //verificar acho que não precisa
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

}

function atualizarPontos(req,res){
    var pontosFinaisServer = req.body.pontosFinaisServer;
    var eloServer = req.body.eloServer;
    var rodadasServer = req.body.rodadasServer;
    var fkJogadorServer = req.body.fkJogadorServer;

    jogoModel.atualizarPontos(pontosFinaisServer, eloServer, rodadasServer, fkJogadorServer)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",                  //verificar acho que não precisa
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    inserir,
    atualizarPontos
}