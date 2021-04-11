// const validatePassword = require('./validatePasswordLogin');
// const validateEmail = require('./validateEmailLogin');

const validateRegister = async (req, res, next) => {
  console.log(req, res, next);
//   try {
//     await validateEmail(req, res);
//     await validatePassword(req, res);
//     next();
//   } catch (Err) {
//     next(Err);
//   }
};

module.exports = validateRegister;
