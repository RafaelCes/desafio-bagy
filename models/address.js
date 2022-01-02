const Address = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    street: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    cep: DataTypes.STRING,
    number:DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Customer,
      { foreignKey: 'customerId', as: 'employees' });
  };

  return Address;
};

module.exports = Address;