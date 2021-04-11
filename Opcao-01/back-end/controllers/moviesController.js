const { Router } = require('express');
const { Movie } = require('../models');

const routerMovie = Router();

routerMovie.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  res.status(200).json(movies);
});

routerMovie.post('/', async (req, res) => {
  const {
    newTitle: title,
    newSubtitle: subtitle,
    newStoryline: storyline,
    newRating: rating,
    newImagePath: imagePath,
    newGenre: genre,
    newDirector: director,
    newQuantity: quantity,
  } = req.body.movie;

  await Movie.create({
    title, subtitle, storyline, rating, imagePath, genre, director, quantity,
  })
    .then(() => {
      res.status(200).json({ message: 'criado com sucesso' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

routerMovie.delete('/:id', async (req, res) => {
  await Movie.destroy({
    where: {
      id: req.body.movie.id,
    },
  })
    .then(() => {
      res.status(200).send({ message: 'Filme removido com sucesso' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = routerMovie;
