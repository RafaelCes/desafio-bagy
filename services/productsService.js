const { Product } = require('../models');

const createProduct = async (body) => {
const response = await Product.create({ ...body });

return response;
};

const getAllProducts = async () => {
  const response = await Product.findAll({});
  return response;
};

const getProductById = async (id) => {
  const product = await Product.findOne({
    where: { id },
  });

  if (!product) throw new Error('PRODUCT_NOT_FOUND');

  return product;
};

const updateProduct = async (body, id) => {
  const product = await Product.findOne({
    where: { id },
  });

  if (!product) throw new Error('PRODUCT_NOT_FOUND');

  await Product.update(
    { ...body },
   { where: { id } },
  );

  return { id: product.id, ...body };
};

const deleteProduct = async (id) => {
  const product = await Product.findOne({
    where: { id },
  });

  if (!product) throw new Error('PRODUCT_NOT_FOUND');

  await Product.destroy(
   { where: { id } },
  );

  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};