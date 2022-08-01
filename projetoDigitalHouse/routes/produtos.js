const express = require('express');

const router = express.Router();

const ProdutosController = require('../controllers/ProductsController');

router.get('/', ProdutosController.view)
router.get('/categoria', ProdutosController.categoria)
router.get('/create/', ProdutosController.create);
router.post('/create/', upload.single('image'), ProdutosController.store);
router.get('/detail/:id', ProdutosController.detail);
router.get('/edit/:id', ProdutosController.edit); 
router.put('/edit/:id', ProdutosController.update);
router.delete('/delete/:id',ProdutosController.destroy);


module.exports = router;