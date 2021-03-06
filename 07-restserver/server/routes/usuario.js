const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
const Usuario = require('../models/usuario');
const { verifToken, verifTokenRole } = require('../middlewares/auth');


app.get('/usuario', verifToken, (req, res) => {

    // {estado: true}
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);


    Usuario.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            // Usuario.count({}, (err, conteo) => {

            //     res.json({
            //         ok: true,
            //         usuarios,
            //         conteo
            //     })
            // })

            res.json({
                ok: true,
                usuarios
            })
        })
})

app.post('/usuario', [verifToken, verifTokenRole], (req, res) => {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        // usuarioDB.password = null;
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })

})

app.put('/usuario/:id', [verifToken, verifTokenRole], (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado'])

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})

app.delete('/usuario/:id', [verifToken, verifTokenRole], (req, res) => {


    let id = req.params.id;

    let cambiaEstado = {
        estado: false
    }

    // Usuario.findByIdAndRemove(id, (err, usuarioDelete) => {
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioDelete) => {

        let id = req.params.id;


        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!usuarioDelete) {

            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario no encontrado"
                }
            })
        }

        res.json({
            ok: true,
            usuarioDelete
        })
    })
})


module.exports = app;