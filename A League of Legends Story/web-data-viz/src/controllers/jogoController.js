var jogoModel = require("../models/jogoModel");

function inserir(req,res){
    var eloFinal = req.body.eloServer;
    var fkUsuario = req.body.fkUsuarioServer;

    jogoModel.inserir(eloFinal, fkUsuario)
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
    inserir
}