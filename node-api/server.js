const { response } = require('express');
const express = require('express');

const app = express();


            // require, response
app.get('/', (req, res) => {
    res.send("Olá rapaziada")
});

// Criando a porta da app
app.listen(3001);