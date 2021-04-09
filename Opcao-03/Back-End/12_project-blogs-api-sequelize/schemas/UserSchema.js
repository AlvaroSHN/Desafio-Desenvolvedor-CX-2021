// import * as yup from 'yup';
const yup = require('yup');

const userSchema = yup.object().shape({
  displayName: yup
    .string().min(8, '"displayName" length must be at least 8 characters long').required('"displayName" is required'),
  email: yup
    .string().email('"email" must be a valid email').required('"email" is required'),
  password: yup.string()
    .min(6, '"password" length must be 6 characters long').required('"password" is required'),
});

module.exports = {
  userSchema,
};
