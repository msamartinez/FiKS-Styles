const Sequelize = require("sequelize");
const db = require("../db");
const Cart=require("./Cart")
const Product=require("./Product");


const CartItems = db.define("cartItems", {
  quantity: {
    type: Sequelize.INTEGER,
  },
  ProductId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  },
});

module.exports = CartItems;