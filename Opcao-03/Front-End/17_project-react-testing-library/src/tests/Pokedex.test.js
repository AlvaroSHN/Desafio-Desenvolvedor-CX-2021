import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';
import pokemons from '../data';

afterEach(cleanup);

describe('Testando o arquivo Pokedex.js', () => {
  describe('Testar se é exibido o próximo Pokémon quando o botão é clicado', () => {
    it('O botão deve conter o texto `Próximo pokémon´', () => {
      const { getByTestId, queryByText } = renderWithRouter(<App />);
      const button = getByTestId('next-pokemon');
      expect(queryByText('Encountered pokémons')).toBeInTheDocument();
      expect(queryByText('Encountered pokémons').tagName).toBe('H2');

      expect(button).toBeInTheDocument();
      expect(button.innerHTML).toBe('Próximo pokémon');
    });
    it('Os próximos Pokémons da lista devem ser mostrados ao clicar no botão', () => {
      const { getByTestId } = renderWithRouter(<App />);
      const button = getByTestId('next-pokemon');
      const pokemonFirstOne = getByTestId('pokemon-name').innerHTML;

      fireEvent.click(button);

      const pokemonSecondOne = getByTestId('pokemon-name').innerHTML;
      expect(pokemonFirstOne).not.toBe(pokemonSecondOne);
    });
    it('1º Pokémon deve ser mostrado ao clicar no botão se estiver no último', () => {
      const { getByTestId } = renderWithRouter(<App />);
      const button = getByTestId('next-pokemon');
      const pokemonFirstOne = getByTestId('pokemon-name').innerHTML;

      pokemons.forEach(() => fireEvent.click(button));

      const pokemonSecondOne = getByTestId('pokemon-name').innerHTML;
      expect(pokemonFirstOne).toBe(pokemonSecondOne);
    });
  });

  describe('Teste se é mostrado apenas um Pokémon por vez.', () => {
    it('Testar se aparece apenas uma imagem por click', () => {
      const { getByTestId, getAllByRole } = renderWithRouter(<App />);
      const button = getByTestId('pokemon-name');
      const img = getAllByRole('img').length;

      pokemons.forEach(() => {
        fireEvent.click(button);
        expect(img).toBe(1);
      });
    });
  });

  describe('Teste se a Pokédex tem os botões de filtro', () => {
    it('Pokémons do tipo selecionado através do botão devem estar circulados', () => {
      const { queryByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
      const buttonType = getAllByTestId('pokemon-type-button');
      const buttonNext = getByTestId('next-pokemon');

      buttonType.forEach((element) => {
        const firstPoke = pokemons.find((e) => e.type === element.firstChild.textContent); // Nome do primeiro pokemon de cada tipo
        const prevType = element.firstChild.textContent; // Um tipo por passagem
        fireEvent.click(element);
        const currentType = getByTestId('pokemonType'); //  Pego o tipo do pokemon que apareceu na tela
        expect(currentType).toHaveTextContent(prevType);// Comparo se possui o texto
        const filter = pokemons.filter((e) => e.type === prevType); // filter = possui os pokemons filtrados pelo tipo
        if (filter.length > 1) fireEvent.click(buttonNext);
        else expect(buttonNext).toBeDisabled();
        while (!queryByText(firstPoke.name)) {
          //  console.log('Primeiro Poke:', firstPoke.name, 'Tipo atual: ', currentType.firstChild.textContent, 'Tipo passado: ', prevType);
          //  Se não for primeiroPoke, verifica se está no tipo e clica próximo
          expect(currentType).toHaveTextContent(prevType);
          fireEvent.click(buttonNext);
        }
      });
    });
    it('O texto do botão deve corresponder ao nome do tipo, ex. Psychic.', () => {
      const { getAllByTestId, getByTestId } = renderWithRouter(<App />);
      const buttonText = getAllByTestId('pokemon-type-button');
      const pokemonType = getByTestId('pokemonType');

      buttonText.forEach((element) => {
        fireEvent.click(element);
        expect(element.innerHTML).toBe(pokemonType.innerHTML);
      });
    });
  });

  describe('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    it('O texto do botão deve ser All.', () => {
      const { queryByText } = renderWithRouter(<App />);
      const button = queryByText('All');
      expect(button).toBeInTheDocument();
    });

    it('A Pokedéx circula por todos os Pokémons quando botão for clicado.', () => {
      const { queryByText, getByTestId } = renderWithRouter(<App />);
      const button = queryByText('All');
      const buttonNext = getByTestId('next-pokemon');

      pokemons.forEach(() => {
        fireEvent.click(button);
        expect(buttonNext).not.toBeDisabled();
      });
    });

    it('Ao carregar a página, o filtro selecionado deverá ser All.', () => {
      const { queryByText, getByTestId } = renderWithRouter(<App />);
      const button = queryByText('All');
      const buttonNext = getByTestId('next-pokemon');
      const cont = jest.fn();
      pokemons.forEach(() => {
        cont();
        fireEvent.click(button);
        expect(buttonNext).not.toBeDisabled();
      });
      expect(cont).toHaveBeenCalledTimes(pokemons.length);
    });
  });

  describe('Teste se é criado, dinamicamente, botão de filtro para cada tipo', () => {
    let buttonsList; let pokemonList;
    beforeEach(() => {
      const { getAllByTestId } = renderWithRouter(<App />);
      buttonsList = getAllByTestId('pokemon-type-button').map(
        (e) => e.firstChild.textContent,
      );
      pokemonList = ['Electric', 'Fire', 'Bug',
        'Poison', 'Psychic', 'Normal', 'Dragon'];
    });

    it('Os botões de filtragem devem ser dinâmicos.', () => {
      expect(buttonsList).toStrictEqual(Object.values(pokemonList));
    });

    it('Deve existir um botão de filtragem para cada tipo de Pokémon.', () => {
      expect(buttonsList.length).toStrictEqual(pokemonList.length);
    });

    it('Deve ser mostrado como opção de filtro, um botão para cada um dos tipos', () => {
      pokemonList.forEach((pokemon) => expect(buttonsList.includes(pokemon)).toBe(true));
    });
  });

  describe('O botão de Próximo pokémon desabilita quando tiver um só pokémon.', () => {
    it('Calcular tamanho do array filtrado', () => {
      const { getByTestId, getAllByTestId } = renderWithRouter(<App />);
      const buttonType = getAllByTestId('pokemon-type-button');
      const buttonNext = getByTestId('next-pokemon');
      buttonType.forEach((element) => {
        const prevType = element.firstChild.textContent;
        fireEvent.click(element);
        const filter = pokemons.filter((e) => e.type === prevType);
        if (filter.length === 1) expect(buttonNext).toBeDisabled();
      });
    });
  });
});
