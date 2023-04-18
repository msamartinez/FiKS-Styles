const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://wallup.net/wp-content/uploads/2018/09/25/619118-blue_eyes-green_hair-elven-pointed_ears-video_games-Hearthstone-Warcraft-digital_art-artwork-Tyrande_Whisperwind-Moon-World_of_Warcraft-Blizzard_Entertainment-748x439.jpg',
    validate: {
      isUrl: true
    }
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
    type: Sequelize.ENUM('Top', 'Buttom', 'Dress'),
    defaultValue: 'Top'
  }
  
})

module.exports = Product