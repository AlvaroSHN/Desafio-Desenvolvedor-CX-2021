import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import deleteMovieById from '../methods/removeMovie'
import locateMovie from '../methods/locateMovie'
import '../style/MovieDetails.css'


function MovieDetails ({ location: {movie, isAdmin} }) {
  const [redirect, setRedirect] = useState(false)

  const handleDelete = async (movie) => {
    await deleteMovieById(movie)
    setRedirect(true);
  }

  if (!movie || redirect) return <Redirect to='/movies' />
  const {
    title, storyline, imagePath, genre, rating, subtitle, id, director, quantity
  } = movie;
  console.log(isAdmin)
  return (
    <div data-testid="movie-details" className="movie-card-body">
      <div className="movie-card-image-div"><img alt="Movie Cover" className="movie-card-image" src={imagePath} /></div>
      <p className="movie-card-title">{`Título: ${title}`}</p>
      <p className="movie-card-subtitle">{`Subtítulo: ${subtitle}`}</p>
      <p className="movie-card-storyline">{`Sinopse: ${storyline}`}</p>
      <p className="movie-card-genre">{`Gênero: ${genre}`}</p>
      <p className="movie-card-director">{`Diretor: ${director}`}</p>
      <p className="movie-card-quantity">{`Quantidade: ${quantity}`}</p>
      <p className="rating">{`Nota: ${rating}`}</p>
      <div className="div-buttons">
      {!isAdmin &&  
        <button
          className="locate-movie-btn"
          onClick={() => locateMovie(movie)}
        >
          ALUGAR
        </button>
      }
     
      {isAdmin && <> 
        <Link 
          className="movie-card-link" 
          to={{
            pathname:`/movies/${id}/edit`,
            movie,
          }}
        >
          EDITAR
        </Link>
        <button
          className="movie-card-link"
          onClick={() => handleDelete(movie)}
        >
          DELETAR
         </button>
      </>
      }
      <Link className="movie-card-link" to="/movies">VOLTAR</Link>
      </div>
    </div>
    );
  }


MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
