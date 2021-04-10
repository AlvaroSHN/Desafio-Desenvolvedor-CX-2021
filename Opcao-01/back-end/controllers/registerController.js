const { Router } = require('express');
const { Client } = require('../models');

const routerRegister = Router();

routerRegister.post('/', async (req, res) => {
  try {
    const { seller, ...clientData } = req.body.client;
    clientData.role = seller ? 'administrator' : 'client';
    console.log('objeto enviado para o bd,', clientData);
    const client = await Client.create(clientData);
    console.log('resposta da criacao', client);
    return res.status(201).json({ message: 'usuario cadastrado com sucesso' });
  } catch (err) {
    res.status(err.code).json(err.message);
  }
});

module.exports = routerRegister;
