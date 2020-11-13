var db = require('../config/db');

class Usuario {
    index(){
        var sql = 'select id, nome, idade FROM usuario';
        return db.query(sql);
    };

    create(nome, idade) {
        var sql =`INSERT INTO usuario (nome, idade) VALUES ('${nome}', '${idade}')`;
        return db.query(sql);
    }

    find (idade){
        var sql = `SELECT id, nome, idade FROM usuario WHERE idade = ${idade}`
        return db.query(sql);
    }
}
module.exports= Usuario;