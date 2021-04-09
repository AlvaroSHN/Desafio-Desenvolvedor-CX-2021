import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import updateMovie from '../methods/updateMovie'

import { MovieForm } from '../components';

function EditMovie ({ location: {movie} }) {

  const handleSubmit = async (updatedMovie) => {
    console.log('ATUALIZAR', updatedMovie) // enviar esse objeto p/ bd atualizar um filme
    await updateMovie(updatedMovie);
    return <Redirect to="/" />
  }
    return (
      <div data-testid="edit-movie" className="form-body">
        <MovieForm movie={movie} onSubmit={ handleSubmit } />
        <Link className="form-button-back" to={`/`}>VOLTAR</Link>
      </div>
    );
  
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
