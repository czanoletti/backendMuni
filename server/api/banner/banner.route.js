const controller = require('./banner.controller');
const express = require('express');
const router = express.Router();
const BasicQueriesAPI = require('../aux');
const modelName = 'banner';

router.get('/:id', BasicQueriesAPI.getById(modelName));
router.get('/', BasicQueriesAPI.getAll(modelName));

router.post('/', controller.createBanner);
router.put('/:id', BasicQueriesAPI.updateById(modelName));

router.delete('/:id',controller.deleteBanner);



module.exports = router;