const models = require('../../models/db');


exports.createServicio = (req, res) => {

    console.log(req.body);
    let servicio = {

        servicio: req.body.servicio,
        id_empleado: 5,
        id_tipo_servicio: req.body.id_tipo_servicio


    };

    return models.servicio.create(servicio)
        .then(service => {
            res.send(service);
        }).catch( err => {
            res.sendStatus(400).json(err);
        })

};
