module.exports = (sequelize, dataTypes) => {
  const cols = {
    id_fornecedor: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.INTEGER(100),
    },
    email: {
      type: dataTypes.INTEGER(50)
    },
    senha: {
      type: dataTypes.INTEGER(100)
    }

  }
  const config = {
    tableName: 'fornecedores',
    timestamps: false
  }

  return sequelize.define('Fornecedor', cols, config)
}