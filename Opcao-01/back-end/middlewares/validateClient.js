const validateCpf = require('./validateCpf');
const validateAge = require('./validateAge');

const validateClient = async (req, res, next) => {
  try {
    const { cpf, birth_date: birthDate } = req.body;
    validateCpf(cpf);
    validateAge(birthDate);
    next();
  } catch (Err) {
    next(Err);
  }
};

module.exports = validateClient;
