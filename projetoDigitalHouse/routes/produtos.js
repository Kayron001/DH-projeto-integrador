const express = require('express');
const router = express.Router();

const ProdutosController = require('../controllers/ProdutosController')

router.get('/', ProdutosController.view)
router.get('/categoria/:categoria', ProdutosController.categoria)
router.get('/item/:id', ProdutosController.detalhe)
router.get('/cadastrodeproduto', ProdutosController.cadProduto)
router.post('/', ProdutosController.novoProduto); 


module.exports = router;