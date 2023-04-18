const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderitem', {
  qty: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now()
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    allowNull: false
  }
})

export default OrderItem