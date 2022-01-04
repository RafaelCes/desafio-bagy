const { validateProduct } = require('../middlewares/validations');
const productService = require('../services/productsService');

const createProduct = async (input) => {
  try {
    validateProduct(input);

    const product = await productService.createProduct(input);

    return product;
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async () => {
  try {
    const products = await productService.getAllProducts();

    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await productService.getProductById(id);

    return product;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, input) => {
  try {
    validateProduct(input);

    const product = await productService.updateProduct(id, input);

    return product;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await productService.deleteProduct(id);

    return product;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};