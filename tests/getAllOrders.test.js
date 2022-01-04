const chai = require('chai');
const { stub } = require('sinon');


const { expect } = chai;


const { getAllOrders } = require('../controllers/orderController');
const { Order } = require('../models');

const data = [
  {"productId": 1, "customerId": 1, "installments": 3, "status": "ual", "quantity": 3, "createdAt": "1641247501000"},
  {"productId": 2, "customerId": 1, "installments": 1, "status": "ual", "quantity": 5, "createdAt": "1641247501000"},
  {"productId": 3, "customerId": 2, "installments": 3, "status": "ual", "quantity": 7, "createdAt": "1641247501000"},
  {"productId": 4, "customerId": 4, "installments": 2, "status": "ual", "quantity": 1, "createdAt": "1641247501000"},
]

describe('Busca todos os pedidos', () => {
  const findAllStub = stub(Order, 'findAll');

  before(() => {
    findAllStub.resolves(data);
  });

  after(() => {
    findAllStub.restore();
  });

  it('called Order.findAll', async () => {
    await getAllOrders();

    expect(Order.findAll.calledOnce).to.be.equals(true);
  });

  it('a resposta é um array', async () => {
    const result = await getAllOrders();

    expect(result).to.be.an('array');
  });

  it('a resposta contem os pedidos', async () => {
    const result = await getAllOrders();

    expect(result).to.be.deep.equal(data);
  });

});