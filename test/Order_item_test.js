const {expect} = require('chai');
const db = require('../server/db');
const OrderItem = db.model('orderitem');

describe('OrderItem model', () => {
    beforeEach(() => {
        return db.sync({force: true});
    });
    
    describe('column definitions and validations', () => {
        it('has a `qty` field', async () => {
        const orderItem = await OrderItem.build();
        expect(orderItem.qty).to.equal(undefined);
        });
    
        it('has a `date` field', async () => {
        const orderItem = await OrderItem.build();
        expect(orderItem.date).to.equal(undefined);
        });
    
        it('has a `status` field', async () => {
        const orderItem = await OrderItem.build();
        expect(orderItem.status).to.equal(undefined);
        });
    });
    }); // end describe('OrderItem model')
