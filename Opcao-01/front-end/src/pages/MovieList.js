import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import fetchMovies from '../methods/getMovies'

function MovieList () {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => setMovies(await fetchMovies()))();
    setLoading(false)
  }, []);
    if (loading) return <Loading />;
    return (
      <div className="teste">
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link className="add-movie" to="/movies/new">ADICIONAR NOVO FILME</Link>
      </div>
    );
}

export default MovieList;
