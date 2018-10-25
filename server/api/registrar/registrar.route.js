const controller = require('./registrar.controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.registrar);


module.exports = router;