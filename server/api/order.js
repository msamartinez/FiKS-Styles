const router = require('express').Router()
const { Order } = require('../db/index')

// router.delete('/:productId', async (req, res, next) => {
//   try {
//     const itemToRemove = await Order.findAll({
//       where: {
//         items: req.params.productId
//       }
//     })
//     const removeItem = await itemToRemove.destroy()
//     res.json(`${removeItem} has been removed from your order.`)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/', async (req, res, next) => {
//   try {
//     const updatedItem = await Order.update({
//       status: 'ACTIVE',
//       items: req.body
//     })
//     res.json(updatedItem)
//   } catch (err) {
//     next(err)
//   }
// })

router.post('/', async (req, res, next) => {
  try {
    const newItem = await Order.create(req.body)
    res.json(newItem)
  } catch (err) {
    res.send(err)

  }
})

router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll();
    res.json(order)
  } catch (err) {
    next(err)
  }
})

module.exports = router