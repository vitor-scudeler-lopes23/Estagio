var mysql = require('mysql');

var pool = mysql.createPool = {
    user: "root",
    password: "bandtec",
    // server: "mnburger.database.windows.net",
    database: "stockontrol",
    host: "localhost",
    port: 3001
    // options: {
    //     encrypt: true
    // }
}

// function query(sql) {
//     return new Promise ((resolve, reject) => {
//         mssql.connect(connection, error => {
//             if(error) {
//                 throw error;
//             }

//         var request = new mssql.Request();
//         request.query(sql, (error, result) => {
//             if(error) reject(error)
//             resolve(result);
//         });
//     });

//         mssql.on('error', error => {
//             console.log(`Erro ao conectar no banco de dados ${error}`)
//         });
//     });
// }

// module.exports = { query };

exports.pool = pool;