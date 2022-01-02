const express = require('express');
const { Customer } = require('./models')

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  try{

    await Customer.create(req.body);
    res.status(200).json({message: 'teste'});
  } catch (error) {
    console.log(error);
  }
})

module.exports = app;