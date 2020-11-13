var mssql = require('mssql');

var connection = {
        user: "adminsp", // USUARIO DO BANCO
        password: "#GfEstag$", // SENHA DO BANCO
        server: "spservice.database.windows.net", // LOCAL ONDE O BANCO ESTA HOSPEDADO
        database: "spservice", // NOME DO BANCO DE DADOS
        options: {
            encrypt: true
        }
}

function query(sql) {
    return new Promise ((resolve, reject) => {
        mssql.connect(connection, error => {
            if(error) {
                throw error;
            }

        var request = new mssql.Request();
        request.query(sql, (error, result) => {
            if(error) reject(error)
            resolve(result);
        });
    });

        mssql.on('error', error => {
            console.log(`Erro ao conectar no banco de dados ${error}`)
        });
    });
}

module.exports = { query };