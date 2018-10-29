const controller = require('./postulacion.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'postulacion';

router.get('/try', controller.queryTryOut);
router.get('/:id', BasicQueriesAPI.getById(modelName));
router.get('/', BasicQueriesAPI.getAll(modelName));


router.post('/crear_postulacion', controller.createPostulacion);

router.put('/:id', BasicQueriesAPI.updateById(modelName));

router.delete('/:id',BasicQueriesAPI.deleteById(modelName));



module.exports = router;