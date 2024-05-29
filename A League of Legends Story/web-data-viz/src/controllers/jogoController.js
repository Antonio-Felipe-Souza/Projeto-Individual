var jogoModel = require("../models/jogoModel");

function inserir(req,res){
    var pontuacao = req.body.pontuacaoServer;
    var eloFinal = req.body.eloServer;
    var fkUsuario = req.body.fkUsuarioServer;

    jogoModel.inserir(pontuacao, eloFinal, fkUsuario)
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
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    jogoModel.atualizarPontos(pontuacao, fkUsuario)
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