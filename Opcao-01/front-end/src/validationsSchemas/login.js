import * as yup from 'yup';

const minPassword = 6;
const required = 'Campo Obrigatório';

export const loginSchema = yup.object().shape({
  email: yup
    .string('E-mail precisa ser uma string').email('Não é um e-mail válido').required(required),
  password: yup.string()
    .min(minPassword, 'Senha com no minimo 6 caracteres').required(required),
});

