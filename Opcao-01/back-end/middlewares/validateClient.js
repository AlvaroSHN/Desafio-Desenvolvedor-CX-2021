const validateCpf = require('./validateCpf');
const validateAge = require('./validateAge');

const validateClient = async (req, res, next) => {
  try {
    const { cpf, birth_date: birthDate } = req.body;
    if (!validateCpf(cpf)) return res.status(400).json('cpf invalido');
    if (!validateAge(birthDate)) return res.status(400).json('idade invalida');
    return next();
  } catch (Err) {
    next(Err);
  }
};

module.exports = validateClient;
