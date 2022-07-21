const ProdutosController = {
    view: (req, res) =>{
        return res.render('../views/pagProduto.ejs')
    },
    categoria: (req, res) => {
        return res.render('../views/pagCategoria.ejs')
    }
}

module.exports = ProdutosController;