var mysql = require('../config/db').pool;

class Empresa {
    index(){
        var mysql = 'select id, NomeEmpresa, Email, CNPJ, TelefoneCelular, Endereco, NumeroEndereco, Senha FROM Empresa';
        return db.pool(mysql);
    };

    create(NomeEmpresa, Email, CNPJ, TelefoneCelular, Endereco, NumeroEndereco, Senha) {
        var mysql =`INSERT INTO Empresa (NomeEmpresa, Email, CNPJ, TelefoneCelular, Endereco, NumeroEndereco, Senha) VALUES ('${NomeEmpresa}', '${Email}', '${CNPJ}', '${TelefoneCelular}', '${Endereco}', '${NumeroEndereco}', '${Senha}')`;
        return db.pool(mysql);
    }

    find (idade){
        var mysql = `SELECT id, nome, idade FROM Empresa WHERE idade = ${idade}`
        return db.pool(mysql);
    }
}
module.exports= Empresa;




