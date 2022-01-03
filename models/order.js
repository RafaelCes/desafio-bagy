const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    productId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    installments: DataTypes.INTEGER,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    updatedAt: false
  });

  return Order;
};

Order.associate = (models) => {
  Order.hasOne(models.Customer,
    { foreignKey: 'customerId', as: 'customer' });
};

Order.associate = (models) => {
  Order.hasOne(models.Product,
    { foreignKey: 'productId', as: 'product' });
};

module.exports = Order;