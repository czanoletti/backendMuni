'use strict';
const jwt = require('jsonwebtoken');

const models = require('../../models/db');

exports.ingreso = (req, res) => {


    models.usuario.findOne({
            where: {
                usuario: req.body.usuario
            },
            include: [{
                model: models.empleado,
                required: false,
                include:[
                    {
                        model:models.persona
                    },
                    {
                        model:models.rol,
                        required: false
                    }
                ]

            }]
        })

        .then((usuario)=>{
            if(usuario.contrasena != req.body.contrasena){
                res.status(404).send('Invalid Username or password.');
            }else{

                let payload = {subject: usuario.id_usuario };
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token});
            }
        })

        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })


};

