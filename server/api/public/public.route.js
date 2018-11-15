const publicArchivo = require('./public_archivo.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'proyecto';

router.get('/tipos_archivo', publicArchivo.getTypeArchivos);


router.get('/', BasicQueriesAPI.getAll(modelName));




module.exports = router;