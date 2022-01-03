
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {"productId": 1, "customerId": 1, "installments": 3, "status": "ual", "quantity": 3, "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),},
      {"productId": 2, "customerId": 1, "installments": 1, "status": "ual", "quantity": 5, "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),},
      {"productId": 3, "customerId": 2, "installments": 3, "status": "ual", "quantity": 7, "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),},
      {"productId": 4, "customerId": 4, "installments": 2, "status": "ual", "quantity": 1, "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),},
    ]
    return queryInterface.bulkInsert('Orders', data, {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Orders', null, {}),
};