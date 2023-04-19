const router = require('express').Router()
const { models: { OrderDetail }} = require('../db')


router.get('/', async (req, res, next) => {
    try {
        const orderdetails = await OrderDetail.findAll({
        attributes: ['id', 'price', 'quantity', 'user_id']
        })
        res.json(orderdetails)
    } catch (err) {
        next(err)
    }
    })

router.get('/:id', async (req, res, next) => {
    try {
        const orderdetail = await OrderDetail.findByPk(req.params.id)
        res.json(orderdetail)
    } catch (err) {
        next(err)
    }
    }
)

router.post('/', async (req, res, next) => {
    try {
        const orderdetail = await OrderDetail.create(req.body)
        res.json(orderdetail)
    } catch (err) {
        next(err)
    }
    }
)

router.put('/:id', async (req, res, next) => {
    try {
        const orderdetail = await OrderDetail.findByPk(req.params.id)
        await orderdetail.update(req.body)
        res.json(orderdetail)
    } catch (err) {
        next(err)
    }
    }
)

router.delete('/:id', async (req, res, next) => {
    try {
        const orderdetail = await OrderDetail.findByPk(req.params.id)
        await orderdetail.destroy()
        res.json(orderdetail)
    } catch (err) {
        next(err)
    }
    }
)

module.exports = router
