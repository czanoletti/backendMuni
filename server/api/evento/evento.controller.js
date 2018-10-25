const models = require('../../models/db');


exports.createEvento = (req, res) => {

    let evento = req.body;

    console.log(req.body);
    return models.evento.create(evento)
        .then(service => {
            res.send(service);
        }).catch( err => {
            res.sendStatus(400).json(err);
        })

};

