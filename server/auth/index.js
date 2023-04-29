const router = require('express').Router();
const {User} = require('../db/index');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', async (req, res, next) => {
  try {
    await req.session.destroy();
    res.status(200).send('Logged out succesfully');
  }
  catch (error) {
    res.status.apply(500).send(error.message);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, firstName, lastName } = req.body

    const user = await User.create({ username, password, firstName, lastName });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});