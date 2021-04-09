import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';
import pokemons from '../data';

afterEach(cleanup);

describe('Testando o arquivo Pokemon.js', () => {
  describe('Teste se é renderizado card com informações de determinado pokémon.', () => {
    it('O nome correto do Pokémon deve ser mostrado na tela.', () => {
      const { getByTestId, getByText } = renderWithRouter(<App />);
      pokemons.forEach((element) => {
        expect(getByTestId('pokemon-name')).toHaveTextContent(element.name);
        fireEvent.click(getByText('Próximo pokémon'));
      });
    });
    it('O tipo do pokemon deve ser mostrado na tela.', () => {
      const { getByTestId, getByText } = renderWithRouter(<App />);
      pokemons.forEach((element) => {
        expect(getByTestId('pokemonType')).toHaveTextContent(element.type);
        fireEvent.click(getByText('Próximo pokémon'));
      });
    });
    it('O peso médio do pokémon deve ser exibido com um texto', () => {
      const { getByTestId, getByText } = renderWithRouter(<App />);
      pokemons.forEach((element) => {
        const weight = element.averageWeight.value;
        const measurement = element.averageWeight.measurementUnit;
        expect(getByTestId('pokemon-weight')).toHaveTextContent(
          `Average weight:${weight}${measurement}`,
        );
        fireEvent.click(getByText('Próximo pokémon'));
      });
    });
    it('A imagem do Pokémon deve ser exibida', () => {
      const { getByAltText, getByText } = renderWithRouter(<App />);
      pokemons.forEach((element) => {
        const pokeImage = getByAltText(`${element.name} sprite`);
        expect(pokeImage).toBeInTheDocument();
        expect(pokeImage.getAttribute('src')).toEqual(element.image);
        // OBS: expect(pokeImage).toHaveAttribute('src', `${element.image}`);
        fireEvent.click(getByText('Próximo pokémon'));
      });
    });
  });

  describe('Teste se o card do Pokémon indicado na Pokédex contém um link', () => {
    it('Navegação para exibir detalhes deste Pokémon', () => {
      const { getByText } = renderWithRouter(<App />);
      pokemons.forEach((element, index) => {
        const zero = 0;
        for (let i = zero; i < index; i += 1) {
          fireEvent.click(getByText('Próximo pokémon'));
        }
        expect(getByText('More details')).toBeInTheDocument();
      });
    });
  });

  describe('Teste se ao clicar link do Pokémon, é feito o redirecionamento', () => {
    it('Redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
      pokemons.forEach((element, index) => {
        const { getByText } = renderWithRouter(<App />);
        const zero = 0;
        for (let i = zero; i < index; i += 1) {
          fireEvent.click(getByText('Próximo pokémon'));
        }
        fireEvent.click(getByText('More details'));
      });
    });
  });

  describe('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    it('onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
      pokemons.forEach((element, index) => {
        const { getByText, history } = renderWithRouter(<App />);
        const zero = 0;
        for (let i = zero; i < index; i += 1) {
          fireEvent.click(getByText('Próximo pokémon'));
        }
        fireEvent.click(getByText('More details'));
        const { pathname } = history.location;
        expect(pathname).toBe(`/pokemons/${element.id}`);
      });
    });
  });

  describe('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    it('O ícone deve ser o atributo src contendo o caminho /star-icon.svg;', () => {
      const { getByText, getByAltText } = renderWithRouter(<App />);
      fireEvent.click(getByText('More details'));
      fireEvent.click(getByText('Pokémon favoritado?'));
      fireEvent.click(getByText('Favorite Pokémons'));
      const image = getByAltText('Pikachu is marked as favorite');
      expect(image).toBeInTheDocument();
    });
    it('A imagem deve ter o atributo alt igual a <pokemon>', () => {
      const { getByText, getByAltText } = renderWithRouter(<App />);
      fireEvent.click(getByText('Favorite Pokémons'));
      const image = getByAltText('Pikachu is marked as favorite');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/star-icon.svg');
    });
  });
});

// it('teste bruna', () => {
//   pokemons.forEach((poke, index) => {
//     const { getByText, history } = renderWithRouter(<App />);
//     for (let i = 0; i < index; i += 1) {
//       fireEvent.click(getByText('Próximo pokémon'));
//     }
//     fireEvent.click(getByText('More details'));
//     const { pathname } = history.location;
//     console.log(pathname);
//     expect(pathname).toBe(`/pokemons/${poke.id}`);
//   });
// });