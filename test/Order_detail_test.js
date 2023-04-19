const {expect} = require('chai');
const db = require('../server/db');
const OrderDetail = db.model('orderdetail');

describe('OrderDetail model', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('column definitions and validations', () => {
    it('has a `price` field', async () => {
      const orderDetail = await OrderDetail.build();
      expect(orderDetail.price).to.equal(undefined);
    });

    it('has a `quantity` field', async () => {
      const orderDetail = await OrderDetail.build();
      expect(orderDetail.quantity).to.equal(undefined);
    });
  });
}); // end describe('OrderDetail model')



