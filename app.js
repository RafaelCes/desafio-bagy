const express = require('express');
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer,
} = require('./controllers/customerController');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct,
} = require('./controllers/productController');

const app = express();

app.use(express.json());

app.post('/users', createCustomer);
app.get('/users', getAllCustomers);
app.get('/users/:id', getCustomerById);
app.put('/users/:id', updateCustomer);
app.delete('/users/:id', deleteCustomer);

app.post('/products', createProduct);
app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

module.exports = app;