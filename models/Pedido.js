module.exports = (sequelize, dataTypes) => {
  const cols = { 
    id_pedido: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      },  
      codigo: {
        type: dataTypes.INTEGER
      }     
    } 

const config = {
  tableName: 'pedidos',
  timestamps: false
}
  
return sequelize.define('Pedido', cols, config)
}