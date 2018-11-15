const models = require('../../models/db');
const path = require('path');
const multer = require('multer');
const url = require('../../utils/url').url;
const fs = require('fs');
const direc = path.join(__dirname, '..', '..', '..', 'public', 'img', 'banner');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/banner')
    },
    filename: (req, file, cb) => {
        console.log('O#IOQUOQIO#UQ#' + JSON.stringify(file));
        let name = 'banner-'+file.originalname;
        console.log(name);
        cb(null, name)
    }
});

var upload = multer({storage: storage}).single('img');

exports.createBanner = (req, res)=>{

    let path = "";
    upload(req, res, (err) => {
        if(err){
            return res.status(422).json('error');
        }
        console.log(req.file);
        path = `http://${url}/${req.file.path}`;
        console.log(path);


        archivoInfo = { url_banner: path};

        models.banner.create(archivoInfo)
            .then(noticia => {
                res.send(noticia);
            }).catch(err => {
            res.send(err);
        });

    })

};

exports.deleteBanner = (req,res)=> {
    let id = req.params.id;
    console.log(req.params.id);
    models.banner.findById(id)
        .then(
            banner => {
                let nameFile = getName(banner.url_banner);
                let dir = direc + "/" + nameFile;
                console.log(dir);
                fs.unlink(dir, (err)=>{
                    if (err) throw err;
                    console.log('file deleted');

                    banner.destroy()
                        .then(ban => res.send(ban));

                })
            }
        );

};


function getName(filename) {
    var i = filename.lastIndexOf('/');
    return (i < 0) ? '' : filename.substr(i + 1);
}