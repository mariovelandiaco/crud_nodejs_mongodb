const express = require('express');
const Usuario = require('../models/usuario');

const app = express();

//Crear Usuario
app.post('/role/usuario', function(req, res) {

    let usuario = new Usuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.email,
        estado: req.body.estado
    });

    usuario.save((err, usuario) => {
        if (err) {
            res.json({
                estado: 'error',
                message: 'Error al Insertar en la base de datos'
            });
        } else {
            res.json({
                estado: 'OK',
                message: 'FUE INSERTADO CORRECTAMENTE',
                id: usuario._id
            });
        }
    });

});

//Consultar Usuario
app.get('/role/usuario/:id', function(req, res) {

    if (req.params.id != 'all') {
        Usuario.find({ _id: req.params.id }, (err, usuario) => {
            res.json({
                usuario
            });
        });
    } else {
        Usuario.find({}, (err, usuarios) => {
            res.json({
                usuarios
            });
        });
    }

});

//Actualizar Usuario
app.put('/role/usuario/:id', function(req, res) {

    let usuario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        estado: req.body.estado
    }

    let id = req.params.id;
    Usuario.findByIdAndUpdate(id, usuario, { new: true, context: 'query' }, (err, usuario) => {
        if (err) {
            res.json({
                estado: 'error',
                message: 'Error al actualizar en la base de datos',
                err: err
            });
        } else {
            res.json({
                estado: 'OK',
                message: 'Fue actualizado correctamente el usuario'
            });
        }
    });

});

//Eliminar Usuario
app.delete('/role/usuario/:id', function(req, res) {

    if (req.params.id != 'all') {
        Usuario.findByIdAndRemove(req.params.id, (err, usuario) => {

            if (err) {
                res.json({
                    estado: 'error',
                    message: 'Error al eliminar el usuario'
                });
            } else {
                res.json({
                    estado: 'OK',
                    message: 'Usuario eliminado correctamente'
                });
            }

            if (usuario === null) {
                res.json({
                    estado: 'error',
                    message: 'Usuario no encontrado'
                });
            }

        });
    } else {
        Usuario.remove({}, (err, usuario) => {

            if (err) {
                res.json({
                    estado: 'error',
                    message: 'Error al eliminar el usuarios#'
                });
            } else {
                res.json({
                    estado: 'OK',
                    message: 'Usuarios eliminados correctamente'
                });
            }

            if (usuario === null) {
                res.json({
                    estado: 'error',
                    message: 'Usuarios no encontrado'
                });
            }

        });
    }
});

module.exports = app;