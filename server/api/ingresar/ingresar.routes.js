const controller = require('./ingresar.controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.ingreso);



module.exports = router;