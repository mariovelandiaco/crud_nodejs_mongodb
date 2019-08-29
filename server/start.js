require('colors');
let { proccessMongo } = require('../server/connections/mongodb');
let { verifyExpress } = require('../server/connections/express');

//1. Cargamos el Mongo
proccessMongo()
    .then((estado) => {
        console.log(`BASE DE DATOS: ${'ONLINE'.green.bold}`);
    })
    .catch((err) => {
        console.log(`BASE DE DATOS: ${'FAIL'.red.bold}`);
    });

//2. Iniciamos el servidor HTTP
verifyExpress()
    .then((estado) => {
        console.log(`SERVIDOR HTTP: ${'ONLINE'.green.bold}`);
    })
    .catch((err) => {
        console.log(`SERVIDOR HTTP: ${'FAIL'.red.bold}`);
    });