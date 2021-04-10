const { Client } = require('../models');

const validatePassword = async (req, res) => {
  const { email, password } = req.body.client;
  const client = await Client.findOne({ where: { email, password } });
  if (!client) res.status(409).json({ message: 'Informações incorretas' });
};

module.exports = validatePassword;
