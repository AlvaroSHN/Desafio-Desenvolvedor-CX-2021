import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

afterEach(cleanup);

const pokemon = ['Caterpie', 'Ekans'];
const favorite = pokemons.filter((e) => pokemon.includes(e.name));

describe('Testando o arquivo FavoritePokemons.js', () => {
  it('Testando se é exibido na tela a mensagem No favorite pokemon found', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    const isFav = localStorage.FavoritePokemonIds;
    const text = getByText('No favorite pokemon found');
    if (!isFav) {
      expect(text).toBeInTheDocument();
    } else expect(text).not.toBeInTheDocument();
  });

  it('Testando se é exibido todos os cards de pokémons favoritados.', () => {
    const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={ favorite } />);
    expect(queryByText('Caterpie', 'Ekans')).toBeInTheDocument();
  });

  it('Testando se não é exibido nenhum card de pokémon não favoritado.', () => {
    const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={ favorite } />);
    expect(queryByText('Pikachu', 'Charmander')).not.toBeInTheDocument();
  });
});
