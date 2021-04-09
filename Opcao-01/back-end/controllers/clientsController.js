const { Router } = require('express');
const { Client } = require('../models');

const routerClient = Router();

routerClient.get('/', async (_req, res) => {
  const clients = await Client.findAll();
  res.status(200).json(clients);
});

module.exports = routerClient;
