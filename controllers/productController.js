const { validateProduct } = require('../middlewares/validations');
const productService = require('../services/productsService');

const createProduct = async (req, res) => {
  try {
    const { body } = req;

    validateProduct(body);

    const product = await productService.createProduct(body);

    res.status(201).json(product);
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    validateProduct(body);

    const product = await productService.updateProduct(body, id);

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productService.deleteProduct(id);

    res.status(201).json(product);
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