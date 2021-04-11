const { validateAge, validateEmailRegister, validateCpf } = require('./validations');

const validateRegister = async (req, res, next) => {
  try {
    await validateAge(req, res);
    await validateEmailRegister(req, res);
    await validateCpf(req, res);
    next();
  } catch (Err) {
    next(Err);
  }
};

module.exports = validateRegister;
