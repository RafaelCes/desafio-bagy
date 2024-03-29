const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ProductModel = require('../models/product');

describe('O model de Product', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  describe('possui o nome "Product"', () => {
    checkModelName(Product)('Product');
  });

  describe('possui as propriedades corretas ', () => {
    ['name', 'image', 'description', 'weight', 'price', 'stock'].forEach(checkPropertyExists(product));
  });
});