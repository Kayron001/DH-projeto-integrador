const fs = require('fs')
const path = require('path')

const produtosArquivoBase = path.join(__dirname, '../public/data/produtos/produtos.json')

const Produto = require('../models/details');
const detailsController = {
  view:  (req, res) => {
    const { id } = req.params;
    const produto = produtosArquivoBase.findOne(id)
  
   return res.render('../views/details', { produto });
  }
}

module.exports = detailsController