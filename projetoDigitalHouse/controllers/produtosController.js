const fs = require('fs')
const path = require('path')

const produtosArquivoBase = path.join(__dirname, '../data/produtos.json')
const produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'))

const paraMil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const ProdutosController = {
    view: (req, res) => {
        return res.render('pagProduto')
    },


    cadProduto: (req, res) => {
        return res.render('pagCadProduto')
    },

    novoProduto: (req, res) => {
        let novoProduto = {
            id: produtos[produtos.length - 1].id + 1,
            desconto: 0,
            ...req.body,
            image: 'default-image.png'
        };
        produtos.push(novoProduto)
        fs.writeFileSync(produtosArquivoBase, JSON.stringify(produtos, null, ' '));
        res.redirect('/');
    },

    detalhe: (req, res) => {
        let id = req.params.id
        let produtoid = produtos.find(produto => produto.id == id)
        res.render('pagDetaProduto', {
            produtoid,
            paraMil
        })
    },

    categoria: (req, res) => {
        let categoria = req.params.categoria
        let produto = produtos.find(produto => produto.categoria == categoria)

        res.render('pagCategoria', {
            categoria,
            produtos,
            paraMil
        })
    }
}

module.exports = ProdutosController;