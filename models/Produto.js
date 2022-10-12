module.exports = (sequelize, dataTypes) => {
      const cols = { 
        id_produtos: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          },  
        nome:{
          type: dataTypes.INTEGER (125)
        },
        preco:{
          type: dataTypes.DECIMAL 
        },
        desconto:{
          type: dataTypes.DECIMAL
        },
        descricao:{
          type: dataTypes.INTEGER(1000)
        },
        src:{
          type: dataTypes.INTEGER(50)
        }
      } 
      
    const config = {
      tableName: 'produtos',
      timestamps: false
    }
  
return sequelize.define('Produto', cols, config)
}
