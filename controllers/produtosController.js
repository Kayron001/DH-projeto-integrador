const fs = require('fs');
const path = require('path');
const { Produto } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const produtosArquivoBase = path.join(__dirname, '../data/produtos.json');
const produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'));

const paraMil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    criarProduto: async (req, res) => {
        res.render('pagCadProduto')
    },

    novoProduto: async (req, res) => {
        const { nome, preco, desconto, descricao, src = null } = req.body

        const resultado = await Produto.create({
            nome,
            preco,
            desconto,
            descricao,
            src,
        })
    },

    // novoProduto: (req, res) => {
    // let novoProduto = {
    //     ...req.body,
    //     desconto: 0,
    //     preco: Number(req.body.preco),
    //    src : req.file.filename
    // }

    // Produto.create(novoProduto)
    // res.render('/pagCadProduto', Produto );

    // produtos.push(novoProduto)
    //  fs.writeFileSync(produtosArquivoBase, JSON.stringify(produtos, null, ' '))
    //  res.render('/');

    // },


    editar: (req, res) => {
        let id = req.params.id;
        let editar = produtos.find(produto => produto.id == id)
        res.render('pagEditProduto', { editar });
    },


    atualizar: (req, res) = {
        let id = req.params.id
            let editar = produtos.find(produto => produto.id == id)
    
            editar = {
            desconto: 0,
            id: editar.id,
            ...req.body,
            src: editar.src
        }

    },

    // atualizar: (req, res) => {
    //     let id = req.params.id
    //     let editar = produtos.find(produto => produto.id == id)

    //     editar = {
    //         desconto: 0,
    //         id: editar.id,
    //         ...req.body,
    //         src: editar.src
    //     }

    //     let novoProduto = produtos.map(produto => {
    //         if (produto.id == editar.id) {
    //             return produto = { ...editar }
    //         }
    //         return produto
    //     })
    //     fs.writeFileSync(produtosArquivoBase, JSON.stringify(novoProduto, null, ' '))
    //     res.render('/public/images/produtos', { produtosArquivoBase })
    // },

    apagar: (req, res) => {
        let id = req.params.id
        let apagarProduto = produtos.filter(produto => produto.id != id)
        fs.writeFileSync(produtosArquivoBase, JSON.stringify(apagarProduto, null, ' '))
        res.render('/')
    },

    categoria: (req, res) => {
        let categoria = req.params.categoria
        let produtos = produtos.find(produto => produto.categoria == categoria)
        res.render('pagCategoria', {
            categoria,
            produtos,
            paraMil
        })
    },

    todosProdutos: async (req, res) => {
        const produtos = Produto.findAll()
    }

    // todosProdutos: async (req, res) => {
    //     const produtos = await Produto.findAll();
    //     return res.render('pagProdutos', {
    //         produtos,
    //         paraMil
    //     })
    // }

}