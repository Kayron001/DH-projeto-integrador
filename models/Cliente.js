module.exports = (sequelize, dataTypes) => {
  const cols = { 
    id_cliente: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      },  
      nome:{
        type: dataTypes.STRING(100)
      },
      email:{
        type: dataTypes.STRING(50)
      },
      senha:{
        type: dataTypes.STRING(100)
      }
    } 
const config = {
  tableName: 'clientes',
  timestamps: false
}
 
return sequelize.define('Cliente', cols, config)
}