const router = require('express').Router()
const {OrderItem, Product} = require('../db/models')

router.get('/cart', async (req, res, next) => {
    try {
      const order = await OrderItem.findOne({
        where: {
          status: 'pending'
        },
        include: [{model: Product}]
      })
  
      res.json(order)
    } catch (error) {
      next(error)
    }
  })






module.exports = router