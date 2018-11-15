const models = require('../../models/db');

exports.crearInhumacion = (req,res)=>{

    console.log(req.body);

    let persona = {
        p_nombre1: req.body.p_nombre1,
        p_nombre2: req.body.p_nombre2,
        p_apellido1: req.body.p_apellido1,
        p_apellido2: req.body.p_apellido2,
        p_DPI: req.body.p_DPI,
        p_NIT: req.body.p_NIT,
        p_telefono: req.body.p_telefono,
        p_celular: req.body.p_celular,
        email: req.body.email,
        p_direccion: req.body.p_direccion,
        p_fecha_nacimiento: req.body.p_fecha_nacimiento
    };

    let cliente_inhu = {
        relacion_inhumacion: req.body.relacion_inhumacion
    };

    return models.sequelize.transaction(function (t) {

        // chain all your queries here. make sure you return them.
        return models.persona.create(persona, {transaction: t})
            .then(function (per) {

                let cliente_inhumacion = {
                    id_persona: per.id_persona,
                    relacion_inhumacion: req.body.relacion_inhumacion
                };

                return models.cliente_inhumacion.create(cliente_inhumacion, {transaction: t})
                    .then(function (ci) {

                        let inhumacion = {
                            id_empleado: 4,
                            id_cliente_inhumacion: ci.id_cliente_inhumacion
                        };

                        return models.inhumacion.create(inhumacion, {transaction: t})

                    })

            })
    }).then(result => {

        res.send(result);

    }).then(usr => {
        res.status(200).send(usr);
    }).catch(err => {
        res.send(err);
    });

};