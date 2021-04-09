const { Router } = require('express');
const { Movie } = require('../models');

const routerMovie = Router();

routerMovie.get('/', async (_req, res) => {
  const movies = await Movie.findAll();
  res.status(200).json(movies);
});

module.exports = routerMovie;
