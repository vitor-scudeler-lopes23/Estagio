var express = require('express');
var bodyParser = require('body-parser');
var Empresa =require('./model/Empresa');
const { Request } = require('mssql');

var server = express();
server.use(express.json());

server.use(bodyParser.json());

server.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333');
});

server.get('/', async function(request, response){
    
    var empresa = new Empresa();

    var resultado = await empresa.index();
    response.status(200).send(resultado)
});

server.post('/', async function (request, response){
    var nomeEmpresa = request.body.NomeEmpresa;
    var email = request.body.Email;
    var cnpj = resquest.body.CNPJ;
    var telefone = request.body.TelefoneCelular;
    var numeroendereco = request.body.NumeroEndereco;
    var senha = request.body.Senha;

    var empresa = new Empresa();

   await empresa.create(NomeEmpresa, Email, CNPJ, TelefoneCelular, Endereco, NumeroEndereco, Senha);
   response.status(201).send("cadastro realizado com sucesso")
});

server.get('/:idade', async function(request, response) {
    var idade = request.params.idade;

    var empresa = new Empresa();

    var resultado = await empresa.find(idade);
    response.status(201).send(resultado);
})

// server.listen(3333);