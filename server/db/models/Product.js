const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:'imgurl',
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  shortDescription:{
    type:Sequelize.TEXT
  },
  longDescription:{
    type:Sequelize.TEXT
  },
  category:{
    type: Sequelize.ENUM('Top', 'Bottom', 'Dress'),
    defaultValue: 'Top'
  }
  
})

module.exports = Product