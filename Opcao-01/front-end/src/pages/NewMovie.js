import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import addMovie from '../methods/addMovie'
import { MovieForm } from '../components';

function NewMovie () {

  const handleSubmit = async (newMovie) => {
    console.log('CRIAR', newMovie)
    newMovie.newDirector="teste";
    newMovie.newQuantity=5;
    newMovie.newBookmarked=true;
    await addMovie(newMovie)
    return <Redirect to="/" />
  }

  return (
    <div data-testid="new-movie" className="form-body">
      <MovieForm onSubmit={handleSubmit} />
      <Link className="form-button-back" to="/">VOLTAR</Link>
    </div>
  );
  
}
export default NewMovie;
