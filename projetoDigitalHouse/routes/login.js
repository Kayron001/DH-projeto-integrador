const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController')

router.get('/', LoginController.view)
router.get('/cadastro', LoginController.cadastro)

module.exports = router;