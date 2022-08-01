const fs = require('fs')
const path = require('path')

const produtosArquivoBase = path.join(__dirname, '../public/data/produtos/produtos.json')
const produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'))

const paraMil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const ProdutosController = {
    view: (req, res) => {
        return res.render('pagProduto')
    },

   
    categoria: (req, res) => {
        let produtos = JSON.parse(fs.readFileSync(produtosArquivoBase, 'utf-8'))
        let categoria = req.params.categoria
        let produto = produtos.find(produto => produto.categoria == categoria)
        res.render('pagCategoria', { categoria, produtos, produto, paraMil })
    }
}

module.exports = ProdutosController;