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

  return { newCustomer, newAddress };
};

const getAllCustomers = async () => {
  const response = await Customer.findAll({
    include: [{ all: true }],
  });

  return response;
};

const getCustomerById = async (id) => {
  const response = await Customer.findOne({
    where: { id },
    include: [{ all: true }],
  });
  return response;
};

const updateCustomer = async (id, { fullName, email, cpf, birthDate, address }, t) => {
  const customer = await Customer.findOne({
    where: { id },
  });

  if (!customer) throw new Error('INEXISTENT_POST');

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
    const response = { fullName, email, cpf, birthDate, address };
  return response;
};

const deleteCustomer = async (id) => {
  const customer = await Customer.findOne({
    where: { id },
  });

  if (!customer) throw new Error('INEXISTENT_POST');

  await Customer.destroy({
    where: { id },
  });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};