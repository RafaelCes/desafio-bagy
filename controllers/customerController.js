const Sequelize = require('sequelize');
const config = require('../config/config');

const customerService = require('../services/customerService');

const sequelize = new Sequelize(config.development);

const createCustomer = async(req, res) => {
  const t = await sequelize.transaction();
  try{
    const { body } = req;

    const response = await customerService.createCustomer(body, t);

    await t.commit();

    res.status(201).json(response);

  } catch (error){
    await t.rollback();
    console.log(error);
  }
}

module.exports = {
  createCustomer,
}