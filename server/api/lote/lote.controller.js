const models = require('../../models/db');

exports.crearLote = (req, res)=>{

    console.log(req.body);

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
            p_fecha_nacimiento: req.body.p_fecha_nacimiento
        };

        // chain all your queries here. make sure you return them.
        return models.persona.create(persona, {transaction: t})
            .then(function (per) {

                let cliente_lote = {
                    id_persona: per.id_persona
                };


                return models.cliente_lote.create(cliente_lote, {transaction: t})
                    .then(function (cliLote) {

                        let lote = {
                            fila: req.body.fila,
                            sector: req.body.sector
                        };

                        let clienteid = cliLote.id_cliente_lote;

                        return models.lote.create(lote, {transaction: t})
                            .then(function (lote) {

                                let compra_lote = {
                                    recibo_lote: req.body.recibo_lote,
                                    licencia_construccion: req.body.licencia_construccion,
                                    fecha_compra: req.body.fecha_compra,
                                    observacion: req.body.observacion,
                                    id_cliente_lote:  clienteid,
                                    id_empleado: 2,
                                    id_lote: lote.id_lote
                                };


                                return models.compra_lote.create(compra_lote, {transaction:t})

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


};