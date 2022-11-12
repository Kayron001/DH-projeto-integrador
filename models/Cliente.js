module.exports = (sequelize, DataType) => {
  const cols = {
    id_cliente: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataType.STRING(100),
    },
    email: {
      type: DataType.STRING(50),
    },
    senha: {
      type: DataType.STRING(100),
    },
  }
  const config = {
    tableName: 'clientes',
    timestamps: false
  }

  return sequelize.define('Cliente', cols, config)
}