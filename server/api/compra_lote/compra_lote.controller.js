const models = require('../../models/db');

exports.getFullInfoId = (req, res)=>{
    models.compra_lote.findOne({
        where: {
            id_compra_lote: req.params.id
        },
        include: [{
            model: models.empleado,
            required: false,
        },{
            model: models.cliente_lote
        },{
            model: models.lote
        }]
    })

        .then((compra_lote)=>{
            res.send(compra_lote);
        })

        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
};
exports.getFullInfoAll = (req, res)=>{
    models.compra_lote.findAll()

        .then((compra_lote)=>{
            res.send(compra_lote);
        })

        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
};