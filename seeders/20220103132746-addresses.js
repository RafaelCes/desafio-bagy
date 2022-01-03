'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [{"street":"Shopko","district":"Quo Lux","city":"Banjar Triwangsakeliki","state":"null","country":"Indonesia","cep":"36.865-728","number":"9091","customerId":1},
    {"customerId":2,"street":"Glendale","district":"Zoolab","city":"Askim","state":"Ostfold","country":"Norway","cep":"39.847-688","number":"038"},
    {"customerId":3,"street":"Victoria","district":"Solarbreeze","city":"Fīrūzābād","state":"null","country":"Iran","cep":"18.373-895","number":"801"},
    {"customerId":4,"street":"Porter","district":"Latlux","city":"Bonanza","state":"null","country":"Nicaragua","cep":"48.440-409","number":"705"}
    ]
    return queryInterface.bulkInsert('Addresses',
    data, {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Addresses', null, {}),
};