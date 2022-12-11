const express = require('express');

const router = express.Router();


const { andminLogin } = require('../Controllers/admin')

router.post('/andminLogin', andminLogin);

module.exports = router