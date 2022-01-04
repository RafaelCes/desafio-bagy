const chai = require('chai');
const { stub } = require('sinon');


const { expect } = chai;


const { getAllCustomers } = require('../controllers/customerController');
const { Customer } = require('../models');

const data =[{"fullName":"Kathlin","email":"klopez0@google.es","cpf":"745.012.694-30","birthDate":"23-Mar-2021"},
    {"fullName":"Zabrina","email":"zrevance1@w3.org","cpf":"614.621.419-17","birthDate":"05-Oct-2021"},
    {"fullName":"Palmer","email":"pgeffen2@cornell.edu","cpf":"299.656.732-38","birthDate":"28-Aug-2021"},
    {"fullName":"Lion","email":"ltregunna3@nps.gov","cpf":"375.820.169-02","birthDate":"04-Aug-2021"}];

describe('Busca todos os clientes', () => {
  const findAllStub = stub(Customer, 'findAll');

  before(() => {
    findAllStub.resolves(data);
  });

  after(() => {
    findAllStub.restore();
  });

  it('called Customer.findAll', async () => {
    await getAllCustomers();

    expect(Customer.findAll.calledOnce).to.be.equals(true);
  });

  it('a resposta é um array', async () => {
    const result = await getAllCustomers();

    expect(result).to.be.an('array');
  });

  it('a resposta contem os clientes', async () => {
    const result = await getAllCustomers();

    expect(result).to.be.deep.equal(data);
  });
  
});