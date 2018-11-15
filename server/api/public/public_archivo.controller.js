const models = require('../../models/db');

exports.getTypeArchivos = (req, res)=>{

    models.tipo_archivo.findAll()
        .then(archivos => {
            res.send(archivos);
        }).catch(err => {
            console.log(err);
    });

};