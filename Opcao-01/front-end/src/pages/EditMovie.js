import React from 'react';
import { Link } from 'react-router-dom';

import { MovieForm } from '../components';

function EditMovie ({ location: {movie} }) {
  return (
    <div data-testid="edit-movie" className="form-body">
      <MovieForm movie={movie}/>
      <Link className="form-button-back" to={`/movies`}>VOLTAR</Link>
    </div>
  );
}

export default EditMovie;
