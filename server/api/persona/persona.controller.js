const models = require('../../models/db');

exports.getPersonaById = async (req, res)=>{
    try {
        let id = req.params.id;
        const response = await models.persona.findById(id);
        res.send(response);
    }catch(err){
        console.log(err);
    }

};

exports.getAllPersona = async(req, res)=>{
    try{
        const response =  await models.persona.findAll();
        res.send(response);
    }catch(err){
        console.log(err);
    }
};


exports.updatePersona = async(req, res)=>{
    try{
        let id = req.params.id;
        const response =  await models.persona.update(req.body, {
            where: {
                id_persona: id
            }
        });
        res.send(response);
    }catch(err){
        console.log(err);
    }
};

exports.deletePersona = async(req, res)=>{
    try{
        let id = req.params.id;
        const response =  await models.persona.destroy({
            where: {
                id_persona: id
            }
        });
        res.status('Usuario Eliminado');
    }catch(err){
        console.log(err);
    }
};