const models = require('../../models/db');
const path = require('path');
const multer = require('multer');
const url = require('../../utils/url').url;
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/archivos')
    },
    filename: (req, file, cb) => {
        console.log('O#IOQUOQIO#UQ#' + JSON.stringify(file));
        let name = "archivos-" + file.originalname;
        console.log(name);
        cb(null, name)
    }
});

var upload = multer({storage: storage}).single('archivo',);


exports.createArchivo = (req, res) => {
    let path = "";
    upload(req, res, (err) => {
        if(err){
            return res.status(422).json("Hubo un error");
        }

        console.log(JSON.stringify(req.file));
        console.log(JSON.stringify(req.body));
        path = `http://${url}/${req.file.path}`;
        console.log(path);


        archivoInfo = { ...req.body, url_archivo: path, id_empleado: 3 };
        console.log(archivoInfo);

        models.archivo.create(archivoInfo)
            .then(archivo => {
                res.send(archivo);
            }).catch(err => {
                res.send(err);
            });


    });


};


function getExtension(filename) {
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
}