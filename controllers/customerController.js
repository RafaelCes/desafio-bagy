const Sequelize = require('sequelize');
const config = require('../config/config.json');
const { validateCustomer } = require('../middlewares/validations');

const customerService = require('../services/customerService');

const sequelize = new Sequelize(config.development);

const createCustomer = async (input) => {
  const t = await sequelize.transaction();
  try {
    
    validateCustomer(input);

    const response = await customerService.createCustomer(input, t);

    await t.commit();

    return response;
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const getAllCustomers = async () => {
  try {
    const customers = await customerService.getAllCustomers();
    return customers;
  } catch (error) {
    console.log(error);
  }
};

const getCustomerById = async (id) => {
  try {
    const customer = await customerService.getCustomerById(id);

    return customer;
  } catch (error) {
    console.log(error);
  }
};

const updateCustomer = async (id, input) => {
  const t = await sequelize.transaction();
  try {
    validateCustomer(input);

    const costumer = await customerService.updateCustomer(id, input, t);

    await t.commit();

    return costumer;
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const deleteCustomer = async (id) => {
  try {
    
    const customer = await customerService.deleteCustomer(id);

    return customer;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};