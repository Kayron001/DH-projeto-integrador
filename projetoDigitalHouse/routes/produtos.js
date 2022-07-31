const express = require('express');

const router = express.Router();

const ProdutosController = require('../controllers/ProductsController');

router.get('/', ProdutosController.view)
router.get('/categoria/:categoria', ProdutosController.categoria)
router.get('/detail/:id', ProdutosController.detail)

module.exports = router;