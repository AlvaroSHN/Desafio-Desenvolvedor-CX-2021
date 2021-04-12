const { Router } = require('express');
const { Client } = require('../models');

const routerRentails = Router();

routerRentails.post('/', async (req, res) => {
  try {
    const { IdCliente, IdFilme } = req.body;
    const teste = new Date();
    const quantity = 5;
    const rental_date = teste;
    console.log(IdCliente, IdFilme, quantity, rental_date);
    await Client.create({
      clientId: IdCliente, movieId: IdFilme, quantity, rental_date,
    });
  } catch (err) {
    return res.status(err.code).json(err.message);
  }
});

module.exports = routerRentails;
