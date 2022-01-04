const chai = require('chai');
const { stub } = require('sinon');


const { expect } = chai;


const { getAllProducts } = require('../controllers/productController');
const { Product } = require('../models');

const data = [{"name":"Oil - Truffle, White","image":"http://dummyimage.com/147x100.png/cc0000/ffffff","description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","weight":17.1,"price":82.69,"stock":81},
    {"name":"Flour Dark Rye","image":"http://dummyimage.com/163x100.png/ff4444/ffffff","description":"Nulla facilisi.","weight":26.8,"price":58.75,"stock":14},
    {"name":"Gin - Gilbeys London, Dry","image":"http://dummyimage.com/161x100.png/ff4444/ffffff","description":"et turpis elementum ligula vehicula consequat.","weight":4.2,"price":42.94,"stock":49},
    {"name":"Food Colouring - Orange","image":"http://dummyimage.com/176x100.png/cc0000/ffffff","description":"sit amet nunc v.","weight":45.1,"price":37.24,"stock":74}];

describe('Busca todos os produtos', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(Product, 'findAll');

    before(() => {
      findAllStub.resolves(data);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Product.findAll', async () => {
      await getAllProducts();

      expect(Product.findAll.calledOnce).to.be.equals(true);
    });

    it('a resposta é um array', async () => {
      const result = await getAllProducts();

      expect(result).to.be.an('array');
    });

    it('a resposta contem os produtos', async () => {
      const result = await getAllProducts();

      expect(result).to.be.deep.equal(data);
    });
  });
});