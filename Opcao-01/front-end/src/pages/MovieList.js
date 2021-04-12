import React, { useEffect, useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import fetchMovies from '../methods/getMovies'
import '../style/MovieList.css';


function MovieList () {
  const [role, setRole] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const isAdmin = role === 'adm' ? true : false;

  useEffect(() => {
    (async () => setMovies(await fetchMovies()))();
    setLoading(false)
    const client = JSON.parse(localStorage.getItem('client'));
    setRole(client.role)
  }, []);
  
  if (loading) return <Loading />;

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard isAdmin={ isAdmin }key={movie.id} movie={movie} />)}
      </div>
      {isAdmin && <Link className="add-movie" to="/movies/new">ADICIONAR NOVO FILME</Link> }
      <button className="sign-out" onClick={()=> handleClick()}>Sair</button>
    </div>
  );
}

export default MovieList;
