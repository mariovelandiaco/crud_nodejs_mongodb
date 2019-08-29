const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombres: {

    },
    apellidos: {

    },
    edad: {

    },
    email: {

    },
    estado: {

    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);