const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { Client, Movie } = require('../models');
const { validateLogin } = require('../middlewares');

const routerClient = Router();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const SECRET = 'senha';

routerClient.get('/', async (_req, res) => {
  const clients = await Client.findAll();
  res.status(200).json(clients);
});

routerClient.post('/', validateLogin, async (req, res) => {
  const { client } = req.body;
  const payload = {
    iss: 'Challenge01',
    aud: 'indentity',
    userData: client.email,
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  const { name, email, role } = res.locals.client;
  return res.status(201).json({
    name, email, token, role,
  });
});

routerClient.get('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await Client.findByPk(id, {
    include: { model: Movie, as: 'movie' },
  });
  // se não possui query, retorna o usuario apenas, possuindo.. retorna os filmes
  // if (!req.query.includeMovies) return res.status(200).json(client);
  const movies = await client.getMovie(); // pega do belongsTo os filmes

  const { dataValues } = movies;
  const { name } = client;

  console.log('O cliente:', name);
  console.log('Alugou o filme:', dataValues.title);

  res.json('Em construção');
});

module.exports = routerClient;
