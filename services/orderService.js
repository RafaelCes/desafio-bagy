const sendEmail = require('../middlewares/sendEmail');
const { Customer, Product, Order } = require('../models');

const createOrder = async ({ productId, customerId, installments, status, quantity }, t) => {
  const customer = await Customer.findOne(
    { where: { id: customerId } },
  );
  const product = await Product.findOne(
    { where: { id: productId } },
  );
  if (!customer || !product) throw new Error('ITEMS_NOT_FOUND');

    if (quantity > product.stock) throw new Error('INSUFICIENT_STOCK');

  await Product.increment(
    { stock: -quantity },
    { where: { id: productId } },
    { transaction: t },
  );

  const response = await Order.create(
    { productId, customerId, installments, status, quantity },
    { transaction: t },
  );

  sendEmail(customer.email, { ...response.dataValues, ...product.dataValues });

  return response;
};

const getAllOrders = async () => {
  const orders = await Order.findAll(
    { include: [{ all: true, through: { attributes: [] } }] },
  );
  return orders;
};

const getOrderByCustomer = async (customerId) => {
  const orders = await Order.findAll(
    { where: { customerId } },
  );
  return orders;
};

const updateOrder = async (id, status, installments, t) => {
  const order = await Order.findOne(
    { where: { id } },
  );

  if (!order) throw new Error('ORDER_NOT_FOUND');
  await Order.update(
    { installments, status },
    { where: { id } },
    { transaction: t },
  );
    return { ...order.dataValues, status, installments };
};

const deleteOrder = async (id, t) => {
  const order = await Order.findOne(
    { where: { id } },
  );

  if (!order) throw new Error('ORDER_NOT_FOUND');

  await Product.increment(
    { stock: order.quantity },
    { where: { id: order.productId } },
    { transaction: t },
  );

  await Order.destroy(
    { where: { id } },
    { transaction: t },
  );

  return order;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderByCustomer,
  updateOrder,
  deleteOrder,
};