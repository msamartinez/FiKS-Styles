const Sequelize = require('sequelize')
const db = require('../db')

const OrderDetail = db.define('orderdetail', {
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  
})

module.exports = OrderDetail