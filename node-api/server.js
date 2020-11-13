var express = require('express');
var bodyParser = require('body-parser');
var Empresa =require('./model/Empresa');
const mysql = require('./config/db').pool;

var server = express();
server.use(express.json());

server.use(bodyParser.json());

server.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});

server.get('/', async function(request, response){
    
    var Empresa = new Empresa();

    var resultado = await Empresa.index();
    response.status(200).send(resultado)
});

// server.post('/', async function (request, response){
//     var nome = request.body.nome;
//     var idade = request.body.idade;

//     var Empresa = new Empresa();

//    await Empresa.create(nome, idade);
//    response.status(201).send("cadastro realizado com sucesso")
// });

// server.get('/:idade', async function(request, response) {
//     var idade = request.params.idade;

//     var Empresa = new Empresa();

//     var resultado = await Empresa.find(idade);
//     response.status(201).send(resultado);
// })