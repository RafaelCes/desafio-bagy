const { Customer, Address } = require('../models');

const createCustomer = async ({ fullName, email, cpf, birthDate, address }, t) => {
  const newCustomer = await Customer.create(
    { fullName, email, cpf, birthDate },
    { transaction: t },
  );
  
  const newAddress = await Address.create(
    { customerId: newCustomer.id, ...address },
    { transaction: t },
  );
    const response = {
      ...newCustomer.dataValues,
      address: { ...newAddress.dataValues },
    };
  return response;
};

const getAllCustomers = async () => {
  const response = await Customer.findAll({
    include: [{ model: Address, as: 'address' }],
  });

  return response;
};

const getCustomerById = async (id) => {
  const customer = await Customer.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!customer.length) throw new Error('CUSTOMER_NOT_FOUND');

  return customer;
};

const updateCustomer = async (id, { fullName, email, cpf, birthDate, address }, t) => {
  const customer = await Customer.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!customer) throw new Error('CUSTOMER_NOT_FOUND');

  await Customer.update(
    { fullName, email, cpf, birthDate },
    { where: { id } },
    { transaction: t },
  );

  await Address.update(
    { ...address },
    { where: { customerId: id } },
    { transaction: t },
  );
    const response = { id, fullName, email, cpf, birthDate, address };
  return response;
};

const deleteCustomer = async (id) => {
  const customer = await Customer.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!customer) throw new Error('CUSTOMER_NOT_FOUND');

  await Customer.destroy({
    where: { id },
  });

  return customer.dataValues;
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};