const Customer = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  Customer.associate = (models) => {
    Customer.hasOne(models.Address,
      { foreignKey: 'customerId', as: 'address' });

    Customer.belongsTo(models.Order,
      { foreignKey: 'customerId', as: 'customer' });
  };

  
 

  return Customer;
};

module.exports = Customer;