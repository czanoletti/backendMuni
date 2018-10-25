const models = require('../../models/db');

exports.AllfromUser = (req, res) => {
    models.usuario.findAll({

        include:[
            {
                model: models.empleado,
                include:[
                    {
                        model: models.rol
                    },
                    {
                        model: models.persona
                    }
                ]
            }
        ]

    }).then(usr => {
        res.status(200).send(usr);
    }).catch(err => {
        res.send(err);
    });
};