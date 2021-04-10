import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard ({ movie }) {
  const handleClick = () => {
    console.log('clicado!')
    // estarei com o usuario
    // verifica estoque
    // adiciona filme ao usuario
    // remove 1 do estoque
  }
  const {
    title, imagePath, storyline, id, quantity
  } = movie;
  // verifica se é usuario ou admin
    return (
      <div data-testid="movie-card" className="movie-card">
        <h4 className="movie-card-title">{title}</h4>
        <span>Quantidade: {quantity}</span>
        <img className="movie-card-image" src={imagePath} alt="movie" />
        <p className="movie-card-storyline">{storyline}</p>
        <Link className="view-details" to={{
          pathname:`/movies/${id}`,
          movie,
        }}
          >VER DETALHES
        </Link>
        <button 
        onClick={() => handleClick()}
        >
          ALUGAR
        </button>
      </div>
    );
  }

export default MovieCard;
