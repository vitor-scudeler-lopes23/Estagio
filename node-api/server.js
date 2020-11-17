var express = require('express');
var bodyParser = require('body-parser');
var Usuario =require('./model/Usuario');
const { Request } = require('mssql');

var server = express();
server.use(express.json());

server.use(bodyParser.json());

server.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333');
});

server.get('/', async function(request, response){
    
    var usuario = new Usuario();

    var resultado = await usuario.index();
    response.status(200).send(resultado)
});

server.post('/', async function (request, response){
    var nome = request.body.nome;
    var idade = request.body.idade;

    var usuario = new Usuario();

   await usuario.create(nome, idade);
   response.status(201).send("cadastro realizado com sucesso")
});

server.get('/:idade', async function(request, response) {
    var idade = request.params.idade;

    var usuario = new Usuario();

    var resultado = await usuario.find(idade);
    response.status(201).send(resultado);
})