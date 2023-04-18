const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('password')
      }
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
      validate:{
        notEmpty:true
      } 
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
      validate:{
        notEmpty:true
      } 
    
    },
    fullName:{
      type:Sequelize.VIRTUAL,
      get(){
        return `${this.firstName} ${this.lastName}`
      }
    },
    
    securityClearance: {
      type: Sequelize.ENUM('user', 'admin'),
      defaultValue: 'user',
      get() {
        return () => this.getDataValue('securityClearance')
      }
    }
  })
  
  module.exports = User