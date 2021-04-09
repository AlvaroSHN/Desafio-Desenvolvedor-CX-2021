const express = require('express');
const { User } = require('../models');
const { validateUser } = require('../middlewares/UserMiddleware');
const tokenGenerator = require('../utils/TokenGenerator');

const router = express.Router();

router.post('/', validateUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await User.create({ displayName, email, password, image })
    .then((newUser) => {
      const { password: pwd, ...UserWithoutPassword } = newUser;
      const token = tokenGenerator(UserWithoutPassword);
      res.locals.user = token;
      res.status(201).json({ token });
    })
    .catch(() => {
      res.status(409).send({ message: 'Usuário já existe' });
    });
});

router.get('/', async (_req, res, _next) => {
  await User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.get('/:id', async (req, res, _next) => {
  await User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }
      //  http GET :3000/login/1\?includeBlogPosts=1
      //  linha 10 em User models
      if (!req.query.includeBlogPosts) return res.status(200).json(user);

      return user.getBlogPosts().then((posts) => {
        res.status(200).json({ ...user.dataValues, posts });
      });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.delete('/:id', async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((users) => {
      res.status(200).send({ message: 'Usuário excluído com sucesso.', users });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.put('/:id', async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await User.update(
    { displayName, email, password, image },
    {
      where: {
        id: req.params.id,
      },
    },
  )
    .then((users) => {
      res.status(200).send({ message: 'Usuário atualizado com sucesso.', users });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;
