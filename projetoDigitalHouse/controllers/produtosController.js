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
            preco: Number(req.body.preco),
            ...req.body,
            src: 'default-image.png'
        };
        produtos.push(novoProduto)
        fs.writeFileSync(produtosArquivoBase, JSON.stringify(produtos, null, ' '));
        res.redirect('/');
    },

    editar: (req, res) => {
        let id = req.params.id
        let editar = produtos.find(produto => produto.id == id)
        res.render('pagEditProduto', { editar })
    },

    atualizar: (req, res) => {
        let id = req.params.id
        let editar = produtos.find(produto => produto.id == id)

        editar = {
            id: editar.id,
            ...req.body,
            src: editar.src
        }

        let novoProduto = produtos.map(produto => {
            if (produto.id == editar.id) {
                return produto = { ...editar }
            }
            return produto
        })
        fs.writeFileSync(produtosArquivoBase, JSON.stringify(novoProduto, null, ' '));
        res.redirect('/')
    },

    detalhe: (req, res) => {
        let id = req.params.id
        let produtoid = produtos.find(produto => produto.id == id)
        res.render('pagDetaProduto', {
            produtoid,
            paraMil
        })
    },

    apagar: (req, res) => {
        let id = req.params.id
        let apagarProduto = produtos.filter(produto => produto.id != id)
        fs.writeFileSync(produtosArquivoBase, JSON.stringify(apagarProduto, null, ' '))
        res.redirect('/')
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