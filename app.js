const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

// const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer,
// } = require('./controllers/customerController');
// const { createOrder, getAllOrders, getOrderByCustomer, updateOrder, deleteOrder,
// } = require('./controllers/orderController');
// const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct,
// } = require('./controllers/productController');

const app = express();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// app.post('/users', createCustomer);
// app.get('/users', getAllCustomers);
// app.get('/users/:id', getCustomerById);
// app.put('/users/:id', updateCustomer);
// app.delete('/users/:id', deleteCustomer);

// app.post('/products', createProduct);
// app.get('/products', getAllProducts);
// app.get('/products/:id', getProductById);
// app.put('/products/:id', updateProduct);
// app.delete('/products/:id', deleteProduct);

// app.post('/orders', createOrder);
// app.get('/orders', getAllOrders);
// app.get('/orders/:id', getOrderByCustomer);
// app.put('/orders/:id', updateOrder);
// app.delete('/orders/:id', deleteOrder);

module.exports = app;