'use strict'

const db = require('../server/db/index');
const {green, red} = require('chalk');
const {User, Product, OrderDetail, OrderItem} = require('../server/db/index');

const users=[
 {

 },
 {

 },
 {

 },
]


const seed = async () => {
  await db.sync({force: true});


  await Promise.all(
    users.map(user => {
      return User.create(user);
    })
  );

  await Promise.all(
    products.map(product => {
      return Product.create(product);
    })
  );

  await Promise.all(
    ordersDetails.map(order => {
      return OrderDetail.create(order);
    })
  );

  await Promise.all(
    orderItems.map(orderItem => {
      return OrderItem.create(orderItem);
    })
  );

  console.log(green('Seeding success!'));

  db.close();
};

seed().catch(err => {
  console.error('Oh noes! Something went wrong!');
  console.error(err);
  db.close();
});