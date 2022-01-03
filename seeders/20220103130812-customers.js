'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data =[{"fullName":"Kathlin","email":"klopez0@google.es","cpf":"745.012.694-30","birthDate":"23-Mar-2021"},
    {"fullName":"Zabrina","email":"zrevance1@w3.org","cpf":"614.621.419-17","birthDate":"05-Oct-2021"},
    {"fullName":"Palmer","email":"pgeffen2@cornell.edu","cpf":"299.656.732-38","birthDate":"28-Aug-2021"},
    {"fullName":"Lion","email":"ltregunna3@nps.gov","cpf":"375.820.169-02","birthDate":"04-Aug-2021"}];
    return queryInterface.bulkInsert('Customers', data, {});
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Customers', null, {}),
};
