const controllers = require('../controllers/usuario');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Libreria para estructuración de JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Cargamos los controladores
app.use(controllers);

//Función para verificar la función de habilitar
let verifyExpress = async() => {
    let status = await processExpress();
    return status;
}

let processExpress = () => {

    return new Promise((resolve, reject) => {
        app.listen(80, (res) => {
                resolve(true);
            })
            .on('error', (err) => {
                reject(false);
            });
    })
}

module.exports = {
    processExpress,
    verifyExpress
}