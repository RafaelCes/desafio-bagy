const express = require('express');
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer,
} = require('./controllers/customerController');

const app = express();

app.use(express.json());

app.post('/users', createCustomer);
app.get('/users', getAllCustomers);
app.get('/users/:id', getCustomerById);
app.put('/users/:id', updateCustomer);
app.delete('/users/:id', deleteCustomer);

module.exports = app;