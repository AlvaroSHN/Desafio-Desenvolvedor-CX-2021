const { Client } = require('../models');

async function validateEmail(req, res) {
  const { email } = req.body.client;
  const client = await Client.findOne({ where: { email } });
  if (!client) return res.status(404).json({ message: 'Usuario não encontrado no banco, favor cadastrar' });
  res.locals.client = client.dataValues;
  return true;
}

module.exports = validateEmail;
