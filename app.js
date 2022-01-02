const express = require('express');
const { createCustomer } = require('./controllers/customerController');
const { Customer } = require('./models')

const app = express();

app.use(express.json());

app.post('/users', createCustomer)

module.exports = app;