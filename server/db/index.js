//this is the access point for all things database related!

const db = require('./db')

const Product= require('./models/Product')
const OrderDetail=require("./models/Order_detail")
const OrderItem=require("./models/Order_item")
const User = require ("./models/User")
//associations could go here!

User.hasMany(OrderItem)
OrderItem.belongsTo(User)

OrderItem.hasMany(Product)
Product.belongsToMany(OrderItem, {through: OrderDetail})



module.exports = {
  db,
  Product,
  OrderDetail,
  OrderItem,
  User,
};
