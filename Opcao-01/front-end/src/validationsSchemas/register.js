import * as yup from 'yup';


const minNameLength = 12;
const minPassword = 6;
const required = 'campo obrigatório';


export const RegisterSchema = yup.object().shape({
  name: yup.string()
    .matches(/^[a-zA-Z\s]*$/,
      'deve conter, no mínimo, 12 letras, sem números ou caracteres especiais')
    .min(minNameLength,
      'deve conter, no mínimo, 12 letras, sem números ou caracteres especiais'),
  email: yup.string('tem que ser string')
    .email('não é email').required(required),
  password: yup.string()
    .min(minPassword, 'senha com no minimo 6 caracteres').required(required),
});


