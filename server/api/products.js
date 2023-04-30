const router = require('express').Router();
const Product = require('../db/models/Product');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')

router.get('/', async (req, res, next) => {
    try {
        const product = await Product.findAll();
        res.json(product);
    }
    catch (error) {
        next (error);
    }
})

router.get('/:productId', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        res.json(product);
    }
    catch (error) {
        next (error);
    }
})

router.put('/:productId', requireToken, isAdmin, async(req,res,next)=>{
    try{
        const target = await Product.findByPk(req.params.productId)
        res.send(await target.update(req.body))
    }
    catch(error){
      next(error)
    }
  })

  router.delete('/:productId', requireToken, isAdmin, async(req,res,next)=>{
    try{
      const product = await Product.destroy({ where: {id : req.params.productId }})
        res.sendStatus(204)
      }
    catch(error){
      next(error)
    }
  })


module.exports = router