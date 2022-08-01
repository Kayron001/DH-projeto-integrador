const express = require('express');

const router = express.Router();

const ProdutosController = require('../controllers/ProductsController');

router.get('/', ProdutosController.view)
router.get('/categoria', ProdutosController.categoria)
router.get('/create/', productsController.create);
router.post('/create/', upload.single('image'), productsController.store);
router.get('/detail/:id', productsController.detail);
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update);
router.delete('/delete/:id', productsController.destroy);


module.exports = router;