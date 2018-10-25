const models = require('../../models/db');

exports.getRolById = async (req, res)=>{
    try {
        let id = req.params.id;
        const response = await models.rol.findById(id);
        res.send(response);
    }catch(err){
        console.log(err);
    }

};


exports.getAllRol = async(req, res)=>{
    try{
        const response =  await models.rol.findAll();
        res.send(response);
    }catch(err){
        console.log(err);
    }
};

exports.updateRol = async(req, res)=>{
    try{
        let id = req.params.id;
        const response =  await models.rol.update(req.body, {
            where: {
                id_rol: id
            }
        });
        res.send(response);
    }catch(err){
        console.log(err);
    }
};

exports.deleteRol = async(req, res)=>{
    try{
        let id = req.params.id;
        const response =  await models.rol.destroy({
            where: {
                id_rol: id
            }
        });
        res.status('Rol eliminado');
    }catch(err){
        console.log(err);
    }
};