const { Client } = require('../models');

const validatePasswordLogin = async (req, res) => {
  const { email, password } = req.body.client;
  const client = await Client.findOne({ where: { email, password } });
  if (!client) res.status(409).json({ message: 'Informações incorretas' });
};

const validateEmailLogin = async (req, res) => {
  const { email } = req.body.client;
  const client = await Client.findOne({ where: { email } });
  if (!client) return res.status(404).json({ message: 'Usuario não encontrado no banco, favor cadastrar' });
  res.locals.client = client.dataValues;
  return true;
};

function validateCpf(cpf) {
  if (!cpf) return false;
  const myCpf = cpf.replace(/\./g, '').replace('-', '');
  return myCpf.length === 11;
}

function validateAge(date) {
  if (!date) return false;
  const clientDate = new Date(date);
  if (clientDate.toString().length === 12) return false;
  const todayDate = new Date();
  const age = todayDate - clientDate;
  return Math.floor(age / 31557600000) >= 18;
}

module.exports = {
  validatePasswordLogin, validateEmailLogin, validateCpf, validateAge,
};
