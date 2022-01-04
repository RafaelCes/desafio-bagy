const Sequelize = require('sequelize');
const config = require('../config/config.json');

const orderService = require('../services/orderService');

const sequelize = new Sequelize(config.development);

const createOrder = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { body } = req;

    const order = await orderService.createOrder(body, t);

    await t.commit();
    res.status(201).json(order);
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

const updateOrder = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { body } = req;
    const { id } = req.params;

    const order = await orderService.updateOrder(id, body, t);

    await t.commit();
    res.status(201).json(order);
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

const deleteOrder = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { id } = req.params;
    const order = await orderService.deleteOrder(id, t);

    await t.commit();
    res.status(201).json(order);
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