const express = require('express');
const router = express.Router();

const ProdutosController = require('../controllers/ProductsController')

router.get('/', ProdutosController.view)
router.get('/categoria/:categoria', ProdutosController.categoria)
router.get('/cadastrodeproduto', ProdutosController.cadProduto)
router.post('/', ProdutosController.novoProduto); 


module.exports = router;