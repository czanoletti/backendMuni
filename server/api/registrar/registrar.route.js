const controller = require('./registrar.controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.registrar);
router.get('/depto_emp', controller.getDeptoEmp);


module.exports = router;