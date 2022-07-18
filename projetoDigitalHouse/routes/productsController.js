const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/productsController')

router.get('/produtos', produtosController.view)

module.exports = router;