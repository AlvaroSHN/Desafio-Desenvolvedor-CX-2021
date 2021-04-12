const { Router } = require('express');
const { Client } = require('../models');
const { validateRegister } = require('../middlewares');

const routerRegister = Router();

routerRegister.post('/', validateRegister, async (req, res) => {
  try {
    const { seller, ...clientData } = req.body.client;
    clientData.role = seller ? 'administrator' : 'client';
    await Client.create(clientData);
    return res.status(201).json({ message: 'Cliente cadastrado com sucesso' });
  } catch (err) {
    return res.status(err.code).json(err.message);
  }
});

module.exports = routerRegister;
