import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import deleteMovieById from '../methods/removeMovie'



function MovieDetails ({ location: {movie} }) {
  const [redirect, setRedirect] = useState(false)

  const handleDelete = async (movie) => {
    await deleteMovieById(movie)
    setRedirect(true);
  }

  if (!movie || redirect) return <Redirect to='/' />
  const {
    title, storyline, imagePath, genre, rating, subtitle, id,
  } = movie;

  return (
    <div data-testid="movie-details" className="movie-card-body">
      <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
      <p className="movie-card-title">{`Title: ${title}`}</p>
      <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
      <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
      <p className="movie-card-genre">{`Genre: ${genre}`}</p>
      <p className="rating">{`Rating: ${rating}`}</p>
      <Link className="movie-card-link" to="/">VOLTAR</Link>
      <Link className="movie-card-link" to={{
        pathname:`/movies/${id}/edit`,
        movie,
        salve:'po'
        }}
        >EDITAR
        </Link>
      <button
        className="movie-card-link"
        onClick={() => handleDelete(movie)}
      >
        DELETAR
      </button>
    </div>
    );
  }


MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
