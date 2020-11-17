var db = require('../config/db');

class Empresa {
    index(){
        var sql = 'select idEmpresa, NomeEmpresa, Email, CPNJ, TelefoneCelular, Endereco, Senha FROM Empresa';
        return db.query(sql);
    };

    create(NomeEmpresa, Email, CPNJ, TelefoneCelular, Endereco, Senha) {
        var sql =`INSERT INTO Empresa (idEmpresa, NomeEmpresa, Email, CPNJ, TelefoneCelular, Endereco, Senha) VALUES ('${NomeEmpresa}', '${Email}', '${CPNJ}', '${TelefoneCelular}', '${Endereco}', '${Senha}')`;
        return db.query(sql);
    }

    find (idade){
        var sql = `SELECT id, nome, idade FROM usuario WHERE idade = ${idade}`
        return db.query(sql);
    }

    
}
module.exports= Empresa;