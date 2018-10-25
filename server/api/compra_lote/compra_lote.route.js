const controller = require('./compra_lote.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'compra_lote';

router.get('/:id', BasicQueriesAPI.getById(modelName));
router.get('/', BasicQueriesAPI.getAll(modelName));
router.get('/todo/:id', controller.getFullInfoId);
router.get('/todo', controller.getFullInfoAll);

router.put('/:id', BasicQueriesAPI.updateById(modelName));

router.delete('/:id',BasicQueriesAPI.deleteById(modelName));



module.exports = router;