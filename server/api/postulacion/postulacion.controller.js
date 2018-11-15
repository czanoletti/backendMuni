const models = require('../../models/db');


exports.createPostulacion = (req, res)=>{
    console.log(req.body);
    console.log(req.file);
};

exports.queryTryOut = (req, res) => {

    models.postulacion.findAll({
        include: [{
            model: models.oferta_trabajo,
            where: {id_oferta_trabajo: models.sequelize.where(models.Sequelize.col('id_oferta_trabajo'), models.Sequelize.col('oferta_trabajo'))}
        }]
    })
        .then( emp => {
            console.log(emp);
            req.send(emp);
        })
        .catch(err => console.log(err));
};