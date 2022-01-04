const chai = require('chai');
const { stub } = require('sinon');


const { expect } = chai;


const { getCustomerById } = require('../controllers/customerController');
const { Customer } = require('../models');

const data =[{"id": 1, "fullName":"Kathlin","email":"klopez0@google.es","cpf":"745.012.694-30","birthDate":"23-Mar-2021"}];

describe('Busca  um cliente especifico', () => {
  const findOneStub = stub(Customer, 'findOne');
  describe('Quando o cliente não é encontraddo', () => { 
    before(() => {
      findOneStub.resolves([]);
    });

    after(() => {
      findOneStub.restore();
    });

    it('called Customer.findOne', async () => {
      await getCustomerById(1);

      expect(Customer.findOne.calledOnce).to.be.equals(true);
    });

    it('a resposta é um objeto', async () => {
      const result = await getCustomerById(1);

      expect(result).to.be.an('object');
    });

    it('a resposta contem as propiedades message e status', async () => {
      const result = await getCustomerById();
      expect(result).to.have.property('message');
      expect(result).to.have.property('status');
    });

    it('as propiedades message e status conem os valores corretos', async () => {
      const result = await getCustomerById(1);
      expect(result.message).to.be.equal('Customer does not exist');
      expect(result.status).to.be.equal(404);
    });
  });
});