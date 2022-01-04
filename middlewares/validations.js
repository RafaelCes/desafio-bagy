const joi = require('joi');

const validateCustomer = (body) => {
  const { error } = joi.object({
    fullName: joi.string().required(),
    email: joi.string().email().required(),
    cpf: joi.string().length(14).required(),
    birthDate: joi.string().required(),
    address: joi.object({
      street: joi.string().required(),
      district: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      country: joi.string().required(),
      cep: joi.string().length(10).required(),
      number: joi.number().required(),
    }),
  }).validate(body);

  if (error) {
    throw new Error('INVALID_FIELDS');
  }
};

const validateProduct = (body) => {
  const { error } = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    description: joi.string().required(),
    weight: joi.number().min(0).precision(1).required(),
    price: joi.number().min(0).precision(2).required(),
    stock: joi.number().min(0).required(),
}).validate(body);

if (error) {
  throw new Error('INVALID_FIELDS');
}
};

module.exports = {
  validateCustomer,
  validateProduct,
};