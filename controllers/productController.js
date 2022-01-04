const errorHandler = require('../middlewares/error');
const { validateProduct } = require('../middlewares/validations');
const productService = require('../services/productsService');

const createProduct = async (input) => {
  try {
    validateProduct(input);

    const product = await productService.createProduct(input);

    return product;
  } catch (error) {
    return errorHandler(error);
  }
};

const getAllProducts = async () => {
  try {
    const products = await productService.getAllProducts();

    return products;
  } catch (error) {
    return errorHandler(error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await productService.getProductById(id);

    return product;
  } catch (error) {
    return errorHandler(error);
  }
};

const updateProduct = async (id, input) => {
  try {
    validateProduct(input);

    const product = await productService.updateProduct(id, input);

    return product;
  } catch (error) {
    return errorHandler(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await productService.deleteProduct(id);

    return product;
  } catch (error) {
    return errorHandler(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};