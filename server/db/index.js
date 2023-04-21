//this is the access point for all things database related!

const db = require('./db')

const Product= require('./models/Product')
const Cart=require("./models/Cart")
const CartItems=require("./models/CartItem")
const User = require ("./models/User")
const Order = require("./models/Order")
//associations could go here!

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order)
CartItems.belongsTo(Product);
Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });



module.exports = {
  db,
  Product,
  CartItems,
  Cart,
  User,
  Order
};
