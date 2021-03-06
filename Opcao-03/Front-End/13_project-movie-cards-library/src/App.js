import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList key={1} movies={movies} />
    </div>
  );
}

export default App;
