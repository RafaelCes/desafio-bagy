const {Customer, Address} = require("../models")

const createCustomer = async({fullName, email, cpf, birthDate, address}, t) => {
  const newCustomer = await Customer.create(
    {fullName, email, cpf, birthDate},
    {transaction: t},
  );
  console.log(address, 'AQUI!!!!!!!!!!');

  const newAddress = await Address.create(
    {customerId: newCustomer.id, ...address},
    {transaction: t},
  )

  return {newCustomer, newAddress};
}

module.exports = {
  createCustomer
}