const fs = require('fs')
const path = require('path');
const Produto = require('../models/produto');

const produtosArquivoBase = path.join(__dirname, '../data/produtos.json')
const produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'))

const paraMil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const ProdutosController = {
    view: (req, res) => {
        return res.render('pagProduto')
    },
    detail: (req, res) => {
		const { id } = req.params;
		const produto = Produto.findOne(id)

		res.render('produtoDetalhes', { produto });
	},
    categoria: (req, res) => {
        let produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'))
        let categoria = req.params.categoria
        let produto = produtos.find(produto => produto.categoria == categoria)
        res.render('pagCategoria', { categoria, produtos, produto, paraMil })
    },
    details: (req, res) => {
        const { id } = req.params;
        const product = produtos.findOne(id)
        
        res.render('detail', { produtos, toThousand });
    },
    create: (req, res) => {
        res.render('product-create-form');
    },
    store: (req, res) => {
    const products = produtos.findAll();
    const receivedProduct = req.body;
    receivedProduct.image = req.file.filename; 
    receivedProduct.id = products.length + 1; // gerar o próximo ID do array, tamanho do array + 1!
    
    
    products.push(receivedProduct);
    produtos.save(products);
    
    res.redirect('/products/detail/' + receivedProduct.id);
    },

// Update - Form to edit
    edit: (req, res) => {
    const { id } = req.params;
    const product = produtos.findOne(id);
    
    res.render('product-edit-form', { product });
        },

// Update - Method to update
    update: (req, res) => {
    const { id } = req.params;
    Produto.update(id, req.body);
    
    res.redirect('/products/detail/' + id);
    },

// Delete - Delete one product from DB
    destroy : (req, res) => {
    const { id } = req.params;
    Produto.destroy(id);
    
    res.redirect('/products');
    }
};


module.exports = ProdutosController;