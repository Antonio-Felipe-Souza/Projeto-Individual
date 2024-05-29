var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de jogoController.js
router.post("/inserir", function (req, res) {
    jogoController.inserir(req, res);
});

router.post("/atualizarPontos", function (req, res) {
    jogoController.atualizarPontos(req, res);
});

module.exports = router;