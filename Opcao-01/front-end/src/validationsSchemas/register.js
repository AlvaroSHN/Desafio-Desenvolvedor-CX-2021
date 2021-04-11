import * as yup from 'yup';

const minNameLength = 8;
const minPassword = 6;
const cpfLength = 11;

export const RegisterSchema = yup.object().shape({
  name: yup.string()
    .matches(/^[a-zA-Z\s]*$/,
      'Nome não deve possuir números ou caracteres especiais')
    .min(minNameLength,
      'Nome deve ter pelo menos 8 caracteres')
    .required('Campo nome é obrigatório'),
  email: yup.string()
    .email('Não é um e-mail válido')
    .required('Campo email é obrigatório'),
  gender: yup.string()
    .matches(/^[a-zA-Z\s]*$/,
      'Gênero não deve possuir números ou caracteres especiais')
    .required('Campo gênero é obrigatório'),
  cpf: yup.string()
    .matches(/^[0-9]*$/, 'CPF deve possuir apenas numeros')
    .length(cpfLength, 'CPF deve conter 11 digitos')
    .required('Campo CPF é obrigatório'),
  birthDate: yup.date()
    .nullable()
    .transform((curr, orig) => orig === '' ? null : curr)
    .required('Campo data é obrigatório'),
  password: yup.string()
    .min(minPassword, 'senha deve ter no minimo 6 caracteres').required('Campo senha é obrigatório'),
});


