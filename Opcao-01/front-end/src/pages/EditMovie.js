import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import updateMovie from '../methods/updateMovie'

function EditMovie ({ location: {movie} }) {

  const handleSubmit = async (newMovie) => {
    newMovie.id = movie.id;
    await updateMovie(newMovie);
    return <Redirect to="/movies" />
  }

  return (
    <div data-testid="edit-movie" className="form-body">
      <MovieForm onSubmit={handleSubmit} movie={movie}/>
      <Link className="form-button-back" to={`/movies`}>VOLTAR</Link>
    </div>
  );
}

export default EditMovie;
