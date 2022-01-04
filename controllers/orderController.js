const Sequelize = require('sequelize');
const config = require('../config/config.json');

const orderService = require('../services/orderService');

const sequelize = new Sequelize(config.development);

const createOrder = async (input) => {
  const t = await sequelize.transaction();
  try {
    const order = await orderService.createOrder(input, t);

    await t.commit();
    return order;
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const getAllOrders = async () => {
  try {
    const orders = await orderService.getAllOrders();

    return orders;
  } catch (error) {
    console.log(error);
  }
};

const getOrderByCustomer = async (customerId) => {
  try {
    const orders = await orderService.getOrderByCustomer(customerId);

    return orders;
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (id, status, installments) => {
  const t = await sequelize.transaction();
  try {
    const order = await orderService.updateOrder(id, status, installments, t);

    await t.commit();
    return order;
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const deleteOrder = async (id) => {
  const t = await sequelize.transaction();
  try {
    const order = await orderService.deleteOrder(id, t);

    await t.commit();
    return order;
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderByCustomer,
  updateOrder,
  deleteOrder,
};