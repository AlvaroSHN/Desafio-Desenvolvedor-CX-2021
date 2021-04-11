import * as yup from 'yup';

export const RegisterMovieSchema = yup.object().shape({
  title: yup.string()
    .required('Campo título é obrigatório'),
  subtitle: yup.string()
    .required('Campo subtítulo é obrigatório'),
  storyline: yup.string()
    .required('Campo sinopse é obrigatório'),
  storyline: yup.number()
    .required('Campo avaliação é obrigatório'),
  imagePath: yup.string()
    .required('Informar o caminho da imagem é obrigatório'),
  director: yup.string()
  .required('O campo diretor é obrigatório'),
  quantity: yup.number()
  .required('Informar a quantidade em estoque'),
});


