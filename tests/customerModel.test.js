const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const CustomerModel = require('../models/customer');

describe('O model de Customer', () => {
  const Customer = CustomerModel(sequelize, dataTypes);
  const customer = new Customer();

  describe('possui o nome "Customer"', () => {
    checkModelName(Customer)('Customer');
  });

  describe('possui as propriedades corretas ', () => {
    ['fullName', 'email', 'cpf', 'birthDate'].forEach(checkPropertyExists(customer));
  });
});