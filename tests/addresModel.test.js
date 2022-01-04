const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const AddressModel = require('../models/address');

describe('O model de Address', () => {
  const Address = AddressModel(sequelize, dataTypes);
  const address = new Address();

  describe('possui o nome "Address"', () => {
    checkModelName(Address)('Address');
  });

  describe('possui as propriedades corretas', () => {
    ['street', 'district', 'city', 'state', 'country', 'cep', 'number'].forEach(checkPropertyExists(address));
  });
});