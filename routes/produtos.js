const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
const upload = require('../middlewares/multer');

router.get('/', ProdutosController.todosProdutos)


router.get('/categoria/:categoria', ProdutosController.categoria)

router.get('/novo',ProdutosController.criarProduto)
router.post('/',upload.single('image'), ProdutosController.novoProduto) 

router.get('/item/editar/:id', ProdutosController.editar)
router.patch('/item/editar/:id', ProdutosController.atualizar)


router.delete('/item/deletar/:id', ProdutosController.apagar)


module.exports = router;