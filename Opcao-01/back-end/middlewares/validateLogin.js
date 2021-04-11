const { validateEmail, validatePassword } = require('./validations');

const validateLogin = async (req, res, next) => {
  try {
    await validateEmail(req, res);
    await validatePassword(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = validateLogin;
