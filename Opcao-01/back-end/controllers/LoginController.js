const { Router } = require('express');
const { getAll, getById } = require('../models/ClientService');
const { validateClient } = require('../middlewares');

const routerLogin = Router();

routerLogin.get('/', async (_req, res) => {
  const clients = await getAll();
  res.send(clients);
});

routerLogin.post('/', validateClient, async (req, res, next) => {
  // const {
  //   name, gender, cpf, birth_date,
  // } = req.body;
  console.log(req.body);
});

routerLogin.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);
  res.json(user);
});

module.exports = routerLogin;
