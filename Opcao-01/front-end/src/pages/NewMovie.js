import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import addMovie from '../methods/addMovie'
import { MovieForm } from '../components';

function NewMovie () {

  const handleSubmit = async (newMovie) => {
    console.log('CRIAR', newMovie)
    await addMovie(newMovie)
    return <Redirect to="/movies" />
  }

  return (
    <div data-testid="new-movie" className="form-body">
      <MovieForm onSubmit={handleSubmit} />
      <Link className="form-button-back" to="/movies">VOLTAR</Link>
    </div>
  );
  
}
export default NewMovie;
