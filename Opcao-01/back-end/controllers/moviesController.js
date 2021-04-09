const { Router } = require('express');
const { Movie } = require('../models');

const routerMovie = Router();

routerMovie.get('/', async (req, res) => {
  // console.log('entrou no get');
  const movies = await Movie.findAll();
  res.status(200).json(movies);
});

routerMovie.delete('/:id', async (req, res) => {
  // console.log('entrou no delete');
  // console.log(req.body.movie.id);
  // console.log(req.method);
  await Movie.destroy({
    where: {
      id: req.body.movie.id,
    },
  })
    .then(() => {
      res.status(200).send({ message: 'Filme removido com sucesso' });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = routerMovie;
