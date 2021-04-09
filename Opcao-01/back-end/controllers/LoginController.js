const { Router } = require('express');
const { getAll, getById, createOne } = require('../models/ClientService');
const { validateClient } = require('../middlewares');

const routerLogin = Router();

routerLogin.get('/', async (_req, res) => {
  const clients = await getAll();
  res.send(clients);
});

routerLogin.post('/', validateClient, async (req, res, next) => {
  //  Validar para usuario Logar
  //  Gerar um token para o usuario
  try {
    const {
      name, gender, cpf, birth_date: birthDate,
    } = req.body;
    const client = await createOne(name, gender, cpf, birthDate);
    console.log(client);
    return client ? res.status(401).json('Cliente cadastrado com sucesso') : res.status(404).json('Cliente já cadastrado');
  } catch (err) {

    // console.log(req.body);
  }
});

routerLogin.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);
  res.json(user);
});

module.exports = routerLogin;
