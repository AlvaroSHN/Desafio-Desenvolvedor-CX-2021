import React from 'react';
import { render, fireEvent, waitForElement, waitFor, screen } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';
import * as API from '../services/index';
import meals from '../../cypress/mocks/meals';
import mealCategories from '../../cypress/mocks/mealCategories';
import { Login } from '../pages';

const fetchMock = require('../../cypress/mocks/fetch');

// describe('Testar a página de login renderiza normalmente', () => {
//   it('Possui input e-mail que faz a validação', () => {
//     const { getByTestId, getByPlaceholderText } = renderWithRouter(<Login />);

//     expect(screen.getAllByTestId('0-card-img'));

//     const inputEmail = getByTestId('email-input');
//     const inputNode = getByPlaceholderText('Digite seu Email');

//     inputEmail.value = 'teste@email.com';

//     const validator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     const isValid = validator.test(String(inputEmail.value).toLowerCase());

//     expect(isValid).toBe(true);
//     expect(inputEmail).toBeInTheDocument();
//     expect(inputNode).toBeInTheDocument();
//   });

//   it('Possui input senha que faz validação', () => {
//     const { getByTestId, getByPlaceholderText } = renderWithRouter(<Login />);

//     const inputPassword = getByTestId('password-input');
//     const inputNode = getByPlaceholderText('Digite sua Senha');

//     const MIN_LENGTH = 7;

//     inputPassword.value = '1234567';

//     expect(inputPassword.value).toHaveLength(MIN_LENGTH);
//     expect(inputPassword).toBeInTheDocument();
//     expect(inputNode).toBeInTheDocument();
//   });

//   it('Possui botão que é habilitado caso as validações estejam corretas', () => {
//     const { getByTestId } = renderWithRouter(<Login />);

//     const inputEmail = getByTestId('email-input');
//     const inputPassword = getByTestId('password-input');
//     const submitBtn = getByTestId('login-submit-btn');

//     expect(submitBtn).toBeDisabled(true);
//     inputEmail.value = 'teste@email.com';
//     inputPassword.value = '1234567';

//     expect(submitBtn).toBeDisabled(false);
//   });
// });

describe('Testar ações após o click do botão', () => {
  it('Redireciona para a página de Comidas', async () => {
    jest.mock('../services/index');
    API.foodsOnRender.mockImplementation(() => Promise.resolve(meals.meals));
    API.foodsCategoriesOnRender.mockImplementation(() => Promise.resolve(mealCategories.meals));

    const { getByTestId, history, getAllByTestId, screen } = renderWithRouter(<App />);

    await (() => expect(API.foodsOnRender).toHaveBeenCalled());
    await (() => expect(API.foodsCategoriesOnRender).toHaveBeenCalled());

    // history.push('/');
    // const WAITING_TIME = 50;

    const inputEmail = getByTestId('email-input');
    const inputPassword = getByTestId('password-input');

    fireEvent.change(inputEmail, { target: { value: 'email@email.com' } });
    fireEvent.change(inputPassword, { target: { value: '1234567' } });

    const submitBtn = getByTestId('login-submit-btn');
    fireEvent.click(submitBtn);

    await waitForElement(() => expect(history.location.pathname).toBe('/comidas'));
    // setTimeout(() => (expect(history.location.pathname).toBe('/comidas')), WAITING_TIME);
  });

  // it('Cria as chaves no LocalStorage', () => {
  //   const { getByTestId } = renderWithRouter(<Login />);
  //   const WAITING_TIME = 50;
  //   const inputEmail = getByTestId('email-input');
  //   const inputPassword = getByTestId('password-input');
  //   const submitBtn = getByTestId('login-submit-btn');

  //   fireEvent.change(inputEmail, { target: { value: 'email@google.com' } });
  //   fireEvent.change(inputPassword, { target: { value: '1234567' } });
  //   fireEvent.click(submitBtn);

  //   setTimeout(() => {
  //     const mealsToken = localStorage.getItem('mealsToken');
  //     const cocktailsToken = localStorage.getItem('cocktailsToken');
  //     const user = JSON.parse(localStorage.getItem('user'));

  //     expect(mealsToken).toBe('1');
  //     expect(cocktailsToken).toBe('1');
  //     expect(user.email).toBe(inputEmail.value);
  //   }, WAITING_TIME);
  // });
});
