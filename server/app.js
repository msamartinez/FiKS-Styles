const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
require ('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const cors = require('cors');
module.exports = app

if (process.env.NODE_ENV !== 'production') require ('../secrets');

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(cors());

app.post('/stripe/change', cors(), async (req, res) => {
  console.log('stripe-routes.js 9 | route reached', req.body);
  let { amount, id } = req.body;
  console.log('stripe-routes.js 10 | amount and id', amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'USD',
      description: 'FiKS-Styles',
      payment_method: id,
      confirm: true,
    });
    console.log('stripe-routes.js 19 | payment', payment);
    res.json({
      message: 'Payment Successful',
      success: true,
    });
  } catch (error) {
    console.log('stripe-routes.js 17 | error', error);
    res.json({
      message: 'Payment Failed',
      success: false,
    });
  }
});

// auth and api routes
app.use('/auth', require('./auth/index'))
app.use('/api', require('./api/index'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
