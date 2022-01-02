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

module.exports = {
  validateCustomer,
};