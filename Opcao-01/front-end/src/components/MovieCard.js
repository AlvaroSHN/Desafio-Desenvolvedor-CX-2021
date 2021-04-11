import React from 'react';
import { Link } from 'react-router-dom';
import locateMovie from '../methods/locateMovie'

function MovieCard ({ movie, isAdmin }) {
  const {
    title, imagePath, storyline, id, quantity
  } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h4 className="movie-card-title">{title}</h4>
        <span>Quantidade: {quantity}</span>
        <img className="movie-card-image" src={imagePath} alt="movie" />
        <p className="movie-card-storyline">{storyline}</p>
        <Link className="view-details" to={{
          pathname:`/movies/${id}`,
          movie,
          isAdmin,
        }}
          >VER DETALHES
        </Link>
        {!isAdmin && 
        <button
        className="locate-movie-btn"
        onClick={async () => await locateMovie(movie)}
        >
          ALUGAR
        </button>
        }
      </div>
    );
  }

export default MovieCard;
