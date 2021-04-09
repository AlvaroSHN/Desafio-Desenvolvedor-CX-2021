import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

function EditMovie ({ location: {movie} }) {

  const handleSubmit = async (updatedMovie) => {
    console.log(updatedMovie)
    // const myMovie = await movieAPI.updateMovie(updatedMovie);
    // if (myMovie === 'OK') this.setState({ shouldRedirect: true });
  }
  console.log(movie)
    return (
      <div data-testid="edit-movie" className="form-body">
        <MovieForm movie={movie} onSubmit={handleSubmit} />
        <Link className="form-button-back" to={`/`}>VOLTAR</Link>
        {/* <Link className="form-button-back" to={`/movies/${movie.id}`}>VOLTAR</Link> */}
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
