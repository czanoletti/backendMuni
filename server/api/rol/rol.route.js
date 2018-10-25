const controller = require('./rol.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'rol';

router.get('/:id', BasicQueriesAPI.getById(modelName));
router.get('/', BasicQueriesAPI.getAll(modelName));

router.put('/:id', BasicQueriesAPI.updateById(modelName));

router.delete('/:id',BasicQueriesAPI.deleteById(modelName));



module.exports = router;