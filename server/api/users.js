const router = require('express').Router()
const  {User} = require('../db/index')

function isAccess(req, res, next) {
  if (!req.user || req.user.securityClearance !== 'admin')
    return res.status(403).json('HEY GUY, WRONG PLACE')
  next()
}

function isUserAccess(req, res, next) {
  if (req.user.id.toString() !== req.params.id)
    return res.status(403).json('HEY GUY, WRONG PLACE')
  else next()
}

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isUserAccess, async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.user.id
      },
      attributes: ['id', 'email','address','firstName','lastName']
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.post('/:id', isUserAccess, async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.user.id
      },
      attributes: ['id', 'email','address','firstName','lastName']
    })
    users.update({firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address})
    res.json(users)
  } catch (error) {
    next(error)
  }
})


module.exports = router