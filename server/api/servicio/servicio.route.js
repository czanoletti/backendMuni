const controller = require('./servicio.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'servicio';

router.get('/:id', BasicQueriesAPI.getById(modelName));
router.get('/', BasicQueriesAPI.getAll(modelName));

router.post('/crear_servicio', controller.createServicio);

router.put('/:id', BasicQueriesAPI.updateById(modelName));

router.delete('/:id',BasicQueriesAPI.deleteById(modelName));



module.exports = router;