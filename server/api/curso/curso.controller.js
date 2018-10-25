const models = require('../../models/db');

exports.createCurso = (req, res) => {
    console.log(req.body);
    let curso = {

        descripcion_curso: req.body.descripcion_curso,
        fecha_fin_curso: req.body.fecha_fin_curso,
        fecha_inicio_curso: req.body.fecha_inicio_curso,
        id_tipo_curso: req.body.id_tipo_curso,
        nombre_curso: req.body.nombre_curso,
        id_empleado: 3

    };


    // chain all your queries here. make sure you return them.
    return models.curso.create(curso)
        .then(ccurso => {
            res.send(ccurso);
        }).catch( err => {
            res.sendStatus(400).json(err);
        })


};

