const { Router } = require('express');
const { Movie } = require('../models');

const routerMovie = Router();

routerMovie.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  res.status(200).json(movies);
});

routerMovie.post('/', async (req, res) => {
  try {
    const { movie } = req.body;
    await Movie.create(movie);
    return res.status(201).json({ message: 'Filme cadastrado com sucesso' });
  } catch (err) {
    return res.status(500).json(err);
  }
});

routerMovie.delete('/:id', async (req, res) => {
  try {
    await Movie.destroy({
      where: {
        id: req.body.movie.id,
      },
    });
    return res.status(200).send({ message: 'Filme removido com sucesso' });
  } catch (err) {
    return res.status(500).json(err);
  }
});

routerMovie.put('/:id', async (req, res) => {
  try {
    const { movie } = req.body;
    await Movie.update(movie, {
      where: {
        id: movie.id,
      },
    });
    return res.status(200).send({ message: 'Filme editado com sucesso' });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = routerMovie;
