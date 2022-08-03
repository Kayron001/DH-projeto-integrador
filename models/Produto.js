const fs = require('fs');
const path = require('path');
const produtosFilePath = path.join(__dirname, '../data/produtos/produtos.json');
const Produto = {
  findAll () {
    return JSON.parse(fs.readFileSync(produtosFilePath, 'utf-8'));
  },

  findOne (id) {
    return this.findAll().find(item => item.id == id);
  },
}
module.exports = Produto;