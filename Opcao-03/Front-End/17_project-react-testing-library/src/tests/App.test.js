import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testar se aplicação renderiza normalmente', () => {
  let textHeading; let text;
  beforeEach(() => {
    const { getByText } = renderWithRouter(<App />);
    textHeading = getByText('Pokédex');
    text = getByText('Encountered pokémons');
  });

  it('Página principal possui o texto `Pokédex´', () => {
    expect(textHeading).toHaveTextContent('Pokédex');
    expect(textHeading).toBeInTheDocument();
  });

  it('Página principal possui o texto Encountered pokémons', () => {
    expect(text).toHaveTextContent('Encountered pokémons');
    expect(text).toBeInTheDocument();
  });
});

describe('Testar se aplicação possui conjunto de links de navegação', () => {
  it('Página deve possuir Home, About e Favorite Pokémons', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Favorite Pokémons')).toBeInTheDocument();
  });
});

describe('Testar se os links levam ao destino correto', () => {
  it('Redirecionar para página /home ao clicar no link Home', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('Home'));
    const path = history.location.pathname;
    expect(path).toBe('/');
    expect(getByText('Pokédex')).toBeInTheDocument();
  });

  it('Redirecionar para página /about ao clicar no link About', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('About'));
    const path = history.location.pathname;
    expect(path).toBe('/about');
    expect(getByText('About Pokédex')).toBeInTheDocument();
  });

  it('Redirecionar para página /favorites ao clicar no link Favorite Pokémons', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('Favorite Pokémons'));
    const path = history.location.pathname;
    expect(path).toBe('/favorites');
    expect(getByText('Favorite pokémons')).toBeInTheDocument();
  });

  it('Redirecionar para página Not Found ao entrar em uma URL desconhecida', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/any');
    expect(getByText('Page requested not found')).toBeInTheDocument();
  });
});
