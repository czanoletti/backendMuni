const models = require('../../models/db');


exports.crearOfertaTrabajo = (req, res) => {

    models.oferta_trabajo.create(req.body)
        .then(oferta => {
            res.send(oferta)
        })
        .catch(err => {
            res.send(err);
        })

};

