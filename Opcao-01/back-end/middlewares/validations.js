const { Client } = require('../models');

const validatePassword = async (req, res) => {
  const { email, password } = req.body.client;
  const client = await Client.findOne({ where: { email, password } });
  if (!client) res.status(409).json({ message: 'Informações incorretas' });
};

const validateEmail = async (req, res) => {
  const { email } = req.body.client;
  const client = await Client.findOne({ where: { email } });
  if (!client) return res.status(404).json({ message: 'Usuario não encontrado no banco, favor cadastrar' });
  res.locals.client = client.dataValues;
  return true;
};

const validateEmailRegister = async (req, res) => {
  const { email } = req.body.client;
  const client = await Client.findOne({ where: { email } });
  if (client) return res.status(409).json({ message: 'E-mail já cadastrado no banco' });
};

const validateCpf = async (req, res) => {
  const { cpf } = req.body.client;
  const client = await Client.findOne({ where: { cpf } });
  if (client) return res.status(409).json({ message: 'CPF já cadastrado no banco' });
};

const validateAge = async (req, res) => {
  const { birthDate } = req.body.client;
  const clientDate = new Date(birthDate);
  const todayDate = new Date();
  const age = Math.floor((todayDate - clientDate) / 31557600000);
  if (age < 18) res.status(409).json({ message: 'Cliente deve ter mais de 18 anos' });
};

module.exports = {
  validatePassword, validateEmail, validateAge, validateEmailRegister, validateCpf,
};
