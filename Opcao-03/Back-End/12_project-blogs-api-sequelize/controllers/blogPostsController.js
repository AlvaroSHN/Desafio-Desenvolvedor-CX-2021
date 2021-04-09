const express = require('express');
const { BlogPost, User } = require('../models');

// {
//   "id": "7706273476706534553",
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "userId": "401465483996", // esse é o id que referência usuário que é o autor do post
//   "published": "2011-08-01T19:58:00.000Z",
//   "updated": "2011-08-01T19:58:51.947Z",
// }

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content, userId, published, updated } = req.body;

  await BlogPost.create({ title, content, userId, published, updated })
    .then((newPost) => {
      res.status(200).json(newPost);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.get('/', async (req, res, _next) => {
  await BlogPost.findAll()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.get('/:id', async (req, res, _next) => {
  await BlogPost.findByPk(req.params.id, {
    include: { model: User, as: 'user', attributes: { exclude: ['password'] } },
    attributes: { exclude: ['userId', 'id'] },
  })
    .then((post) => {
      if (post === null) {
        res.status(404).send({ message: 'Post não encontrado' });
      }

      res.status(200).json(post);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.delete('/:id', async (req, res) => {
  await BlogPost.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => {
      res.status(200).send({ message: 'Post excluído com sucesso.' }, post);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.put('/:id', async (req, res) => {
  const { title, content, userId, published, updated } = req.body;

  await BlogPost.update(
    { title, content, userId, published, updated },
    {
      where: {
        id: req.params.id,
      },
    },
  )
    .then((post) => {
      res.status(200).send({ message: 'Post atualizado com sucesso.' }, post);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;
