'use strict';

const models = require('../../models/db');

exports.registrar = registrar;
exports.getDeptoEmp = getDeptoEmp;
/*
*
* This controller makes transactions for creating a new user.
* Sends an object of full information about the user.
*
* */

function getDeptoEmp(req, res){
    return models.departamento_empleado.findAll({
        include:[
            {
                model: models.empleado
            },
            {
                model: models.departamento
            }
        ]
    })
        .then(depEmp => res.send(depEmp))
        .catch(err => res.json(err) );

}

function registrar(req, res) {
    let id;

    return models.sequelize.transaction(function (t) {

        let persona = {
            p_nombre1: req.body.p_nombre1,
            p_nombre2: req.body.p_nombre2,
            p_apellido1: req.body.p_apellido1,
            p_apellido2: req.body.p_apellido2,
            p_DPI: req.body.p_DPI,
            p_NIT: req.body.p_NIT,
            p_telefono: req.body.p_telefono,
            email: req.body.email,
            p_celular: req.body.p_celular,
            p_direccion: req.body.p_direccion,
            p_fecha_nacimiento: req.body.p_fecha_nacimiento,
        };

        // chain all your queries here. make sure you return them.
        return models.persona.create(persona, {transaction: t})
            .then(function (per) {

                let empleado = {
                    id_persona: per.id_persona,
                    id_rol: req.body.rol,
                    puesto: req.body.puesto,
                    fecha_ingreso: req.body.fecha_ingreso
                };

                return models.empleado.create(empleado, {transaction: t})
                    .then(function (empl) {

                        let usuario = {
                            usuario: req.body.usuario,
                            contrasena: req.body.contrasena,
                            id_empleado: empl.id_empleado
                        };

                        return models.usuario.create(usuario, {transaction: t})
                            .then(function (usuario) {

                                let depto_empl = {
                                    id_departamento: req.body.departamento,
                                    id_empleado: usuario.id_empleado
                                };

                                id = usuario.id_empleado;

                                return models.departamento_empleado.create(depto_empl, {transaction:t})

                            })
                    })

            })
    }).then(result => {

        res.send(result);

        }).then(usr => {
            res.status(200).send(usr);
        }).catch(err => {
            res.send(err);
        });

}



