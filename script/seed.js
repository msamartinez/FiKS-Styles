'use strict'

const { db, User, Product, OrderDetail, OrderItem } = require('../server/db/index');
const {green, red} = require('chalk');

const users = [{ 
  email: 'harrypotter@hogwarts.com',
  address: 'Somewhere in London',
  password: '123', 
  firstName: 'Harry',
  lastName: 'Potter',
 }, {
  email: 'bigpharma@moderna.com',
  address: 'Somewhere in Edgewater NJ',
  password: '123', 
  firstName: 'Kelvin',
  lastName: 'Reynolds',
 }, {
  email: 'bsamuel.brown48@email.com',
  address: 'Somewhere in Edgewater NJ',
  password: '12345asdf', 
  firstName: 'John',
  lastName: 'Kazantzis',
}];

const products = [{
  name: 'short-sleeved shirt',
  imageUrl: 'https://img.ltwebstatic.com/images3_pi/2022/03/18/1647565154c7670d3714e81367097020266dbf638e_thumbnail_600x.webp',
  price: '29.99',
  shortDescription: 'Unisex Short-Sleeved Shirt',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Top',
}, {
  name: 'long-sleeved shirt',
  imageUrl: 'https://jiffyshirts.imgix.net/aac729a15b9d51.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2',
  price: '39.99',
  shortDescription: 'Unisex Long-Sleeved Shirt',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Top',
}, {  
  name: 'shorts',
  imageUrl: 'https://img.ltwebstatic.com/images3_pi/2022/01/13/16420513159406a934186a03ba11805f4f7a18ea73_thumbnail_600x.webp',
  price: '29.99',
  shortDescription: 'Unisex shorts',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Bottom',
}, {
  name: 'pants',
  imageUrl: 'https://cdni.llbean.net/is/image/wim/513837_455_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbprod/A0211793_2',
  price: '39.99',
  shortDescription: 'Unisex pants',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Bottom',
}, {
  name: 'Dress',
  imageUrl: 'https://image.s5a.com/is/image/saks/0400018589633_WHITE?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
  price: '49.99',
  shortDescription: 'Summer Dress',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  category: 'Dress',
}];

const ordersDetail=[{
  price:"39.99",
  user_id:1,
  productId:2,
  orderitemId:1
},
{
  price:"29.99",
  user_id:2,
  productId:3,
  orderitemId:2
},
{
  price:"39.99",
  user_id:3,
  productId:4,
  orderitemId:3
}
];

const orderItem=[
  {
  
    status:"completed",
    orders_id:1,
    productId:2,
    userId:1
  },
  {
    status:"completed",
    orders_id:2,
    products_id:3,
    userId:2
  },
  {
    status:"completed",
    orders_id:3,
    products_id:4,
    userId:3
  },
];



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
        await Promise.all(
          orderItem.map(orderItem => {
            return OrderItem.create(orderItem);
          })
        );

        await Promise.all(
          ordersDetail.map(order => {
            return OrderDetail.create(order);
          })
        );

        

        console.log(green('Seeding success!'));

        db.close();
  }
    catch(err) {
  console.error('Oh no! Something went wrong!');
  console.error(err);
  db.close();
  }
}

seed();