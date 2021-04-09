import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';
import pokemons from '../data';

describe('Testando o arquivo PokemonDetails.js', () => {
  describe('Teste informações detalhadas do Pokémon são mostradas na tela', () => {
    it('A página deve conter um texto <name> Details', () => {
      pokemons.forEach((element) => {
        const { getByText, history } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        expect(getByText(`${element.name} Details`)).toBeInTheDocument();
      });
    });
    it('Não deve existir o link de navegação para os detalhes do Pokémon', () => {
      pokemons.forEach((element) => {
        const { history, queryByText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        expect(queryByText('More details')).toBeNull();
      });
    });
    it('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
      pokemons.forEach((element) => {
        const { history, queryByText, queryAllByText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        expect(queryAllByText('Summary')[0].tagName).toBe('H2');
        expect(queryByText(element.summary)).toBeInTheDocument();
      });
    });
    it('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon', () => {
      pokemons.forEach((element) => {
        const { history, queryByText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        expect(queryByText(element.summary).tagName).toBe('P');
        expect(queryByText(element.summary)).toBeInTheDocument();
      });
    });
  });

  describe('Teste se existe na página uma seção com os mapas ', () => {
    it('Deverá conter, na seção de detalhes, um heading h2', () => {
      pokemons.forEach((element) => {
        const { history, getByText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        expect(getByText(`Game Locations of ${element.name}`)).toBeInTheDocument();
        expect(getByText(`Game Locations of ${element.name}`).tagName).toBe('H2');
      });
    });
    it('Todas as localizações devem ser mostradas na seção de detalhes', () => {
      pokemons.forEach((element) => {
        const { history, getAllByAltText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        const images = getAllByAltText(`${element.name} location`);
        expect(images).toHaveLength(element.foundAt.length);
      });
    });
    it('Devem ser exibidos, o nome da localização e uma imagem do mapa', () => {
      pokemons.forEach((element) => {
        const { history, getByText, getAllByAltText } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        const images = getAllByAltText(`${element.name} location`);
        element.foundAt.forEach((location, index) => {
          expect(images[index].getAttribute('src')).toBe(location.map);
          expect(getByText(`${location.location}`)).toBeInTheDocument();
          expect(images[index]).toBeInTheDocument();
        });
      });
    });
    // it('imagem da localização deve ter um atributo src com a URL da localização.', () => {
    //   //  feito no it acima
    // });
    // it('A imagem da localização deve ter um atributo alt', () => {
    //    //  feito no it acima
    // });
  });

  describe('Teste usuário favorita um pokémon através da página de detalhes', () => {
    it('A página deve exibir um checkbox que permite favoritar o Pokémon', () => {
      pokemons.forEach((element, index) => {
        const { history, getAllByText, container } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        const checkboxLabel = getAllByText('Pokémon favoritado?')[index];
        const checkboxInput = container.querySelector('input');

        expect(checkboxInput.getAttribute('type')).toBe('checkbox');
        expect(checkboxLabel).toBeInTheDocument();
        expect(checkboxInput).toBeInTheDocument();
      });
    });
    it('Cliques alternados no checkbox devem adicionar e remover o Pokémon', () => {
      pokemons.forEach((element, index) => {
        const { history, container } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        const checkboxInput = container.querySelector('input');
        const localStorageItem = JSON.parse(localStorage.getItem('favoritePokemonIds'));

        if (localStorageItem) {
          // Entra aqui na segunda passada e adiciona um id
          fireEvent.click(checkboxInput);
          // console.log(localStorageItem) //= 1-25 2-25,4 3-25,4,10, etc.. (passa 5 vezes)
          // console.log(JSON.parse(localStorage.getItem('favoritePokemonIds'))); // 1-25,4 2-25,4,10
          // console.log(JSON.parse(localStorage.getItem('favoritePokemonIds'))[index]); //com index pego o valor
          const favoriteStorageUpdate = JSON.parse(localStorage
            .getItem('favoritePokemonIds'))[index];
          expect(favoriteStorageUpdate).toBe(element.id);
          // preciso tratar o 'remover pokemon'
        } else {
          //  Entra aqui primeiro, pegando o ID, senão atualizar entra como nulo
          fireEvent.click(checkboxInput);
          // console.log(localStorageItem) //= nulo
          // console.log(JSON.parse(localStorage.getItem('favoritePokemonIds'))); //está com o ID25
          // console.log(JSON.parse(localStorage.getItem('favoritePokemonIds'))[index]); //com index pego o valor
          const favStorageUpdate = JSON.parse(localStorage
            .getItem('favoritePokemonIds'))[index];
          expect(favStorageUpdate).toBe(element.id);
        }

        // const favoriteClass = container.querySelector('.favorite-icon');
        // expect(favoriteClass).toBeInTheDocument();
      });
    });
    it('O label do checkbox deve conter o texto Pokémon favoritado?', () => {
      pokemons.forEach((element, index) => {
        const { history, getAllByText, container } = renderWithRouter(<App />);
        history.push(`/pokemons/${element.id}`);
        const checkboxLabel = getAllByText('Pokémon favoritado?')[index];
        const checkboxInput = container.querySelector('input');

        expect(checkboxInput.getAttribute('type')).toBe('checkbox');
        expect(checkboxLabel).toHaveTextContent('Pokémon favoritado?');
        expect(checkboxInput).toBeInTheDocument();
      });
    });
  });
});
