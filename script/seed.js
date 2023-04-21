'use strict'

const { db, User, Product, Cart, CartItems,Order } = require('../server/db/index');
const {green, red} = require('chalk');

const users = [{ 
  username: 'harrypotter@hogwarts.com',
  address: 'Somewhere in London',
  password: '123', 
  firstName: 'Harry',
  lastName: 'Potter',
  isAdmin:false,
 }, {
  username: 'bigpharma@moderna.com',
  address: 'Somewhere in Edgewater NJ',
  password: '123', 
  firstName: 'Kelvin',
  lastName: 'Reynolds',
  isAdmin:false,
 }, {
  username: 'bsamuel.brown48@email.com',
  address: 'Somewhere in Edgewater NJ',
  password: '123', 
  firstName: 'John',
  lastName: 'Kazantzis',
  isAdmin:true,
}];

const products = [{
  name: 'short-sleeved shirt',
  imageURL: 'https://img.ltwebstatic.com/images3_pi/2022/03/18/1647565154c7670d3714e81367097020266dbf638e_thumbnail_600x.webp',
  price: '29.99',
  shortDescription: 'Unisex Short-Sleeved Shirt',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Top',
}, {
  name: 'long-sleeved shirt',
  imageURL: 'https://jiffyshirts.imgix.net/aac729a15b9d51.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2',
  price: '39.99',
  shortDescription: 'Unisex Long-Sleeved Shirt',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Top',
}, {  
  name: 'shorts',
  imageURL: 'https://img.ltwebstatic.com/images3_pi/2022/01/13/16420513159406a934186a03ba11805f4f7a18ea73_thumbnail_600x.webp',
  price: '29.99',
  shortDescription: 'Unisex shorts',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Bottom',
}, {
  name: 'pants',
  imageURL: 'https://cdni.llbean.net/is/image/wim/513837_455_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbprod/A0211793_2',
  price: '39.99',
  shortDescription: 'Unisex pants',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Bottom',
}, {
  name: 'Dress',
  imageURL: 'https://image.s5a.com/is/image/saks/0400018589633_WHITE?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
  price: '49.99',
  shortDescription: 'Summer Dress',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Dress',
}];





const seed = async () => {
  try {
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
        // await Promise.all(
        //   Carts.map(cart => {
        //     return Cart.create(cart);
        //   })
        // );

        // await Promise.all(
        //   Orders.map(order => {
        //     return Order.create(order);
        //   })
        // );

        console.log(green('Seeding success!'));

        db.close();
  }
    catch(err) {
  console.error('Oh no! Something went wrong!');
  console.error(err);
  db.close();
  }
}

async function runSeed() {
  console.log(`seeding...`)
  try {
    await seed();
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed