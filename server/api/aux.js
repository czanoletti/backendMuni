const models = require('../models/db');

exports.getById = (model) => {

    return async (req, res) => {
        try {
            let id = req.params.id;
            console.log(model, models[model]);
            const response = await models[model].findById(id);
            res.send(response);
        }catch(err){
            console.log(err);
        }
    }

};

exports.getAll = (model)=>{

    return async(req, res)=>{
        try{
            const response =  await models[model].findAll();
            res.send(response);
        }catch(err){
            console.log(err);
        }
    };

};


exports.updateById = (model) => {
    return async(req, res)=>{
        try{
            let id = req.params.id;
            const response =  await models[model].update(req.body, {
                where: {
                    id_persona: id
                }
            });
            res.send(response);
        }catch(err){
            console.log(err);
        }
    };
};

exports.deleteById = (model)=>{

    return async(req, res)=>{
        try{
            let id = req.params.id;
            const response =  await models[model].destroy({
                where: {
                    id_persona: id
                }
            });
            res.status(`${model} Eliminado`);
        }catch(err){
            console.log(err);
        }
    };
};
