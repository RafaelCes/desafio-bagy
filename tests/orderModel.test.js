const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const OrderModel = require('../models/order');

describe('O model de Order', () => {
  const Order = OrderModel(sequelize, dataTypes);
  const order = new Order();

  describe('possui o nome "Order"', () => {
    checkModelName(Order)('Order');
  });

  describe('possui as propriedades corretas ', () => {
    ['productId', 'customerId', 'installments', 'status', 'quantity'].forEach(checkPropertyExists(order));
  });
});