const Sequelize = require('sequelize');
const config = require('../config/config.json');
const { validateCustomer } = require('../middlewares/validations');

const customerService = require('../services/customerService');

const sequelize = new Sequelize(config.development);

const createCustomer = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { body } = req;
    validateCustomer(body);

    const response = await customerService.createCustomer(body, t);

    await t.commit();

    res.status(201).json(response);
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const getAllCustomers = async (_req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const costumer = await customerService.getCustomerById(id);

    res.status(200).json(costumer);
  } catch (error) {
    console.log(error);
  }
};

const updateCustomer = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { body } = req;
    const { id } = req.params;

    validateCustomer(body);

    const costumer = await customerService.updateCustomer(id, body, t);

    await t.commit();

    res.status(201).json(costumer);
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await customerService.deleteCustomer(id);

    res.status(204).send('customar excluded');
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