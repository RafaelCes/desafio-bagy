const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.FLOAT(10,1),
    price: DataTypes.FLOAT(10,2),
    stock: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });


  return Product;
};

module.exports = Product;