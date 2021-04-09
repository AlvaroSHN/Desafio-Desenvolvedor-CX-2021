import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

function MovieForm ({movie}) {
  const [newTitle, setTitle] = useState('');
  const [newSubtitle, setSubtitle] = useState('');
  const [newImagePath, setImagePath] = useState('');
  const [newStoryline, setStoryline] = useState('');
  const [newGenre, setGenre] = useState('');
  const [newRating, setRating] = useState('');

  if (!movie) return <Redirect to="/" />
  const {title, subtitle, imagePath, storyline, rating} = movie;

  const handleSubmit = () =>{
    const updatedMovie = {
      newTitle,newSubtitle, newImagePath, newStoryline, newGenre, newRating
    }
    console.log(updatedMovie); //chamar api passando este filme
  }

  return (
  <form>
      <div>
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder={title}
          id="movie_title"
          type="text"
          className="validate"
          value={newTitle}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder={subtitle}
          id="movie_subtitle"
          type="text"
          value={newSubtitle}
          onChange={(event) => setSubtitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder={imagePath}
          id="movie_image"
          type="text"
          value={newImagePath}
          onChange={(event) => setImagePath(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          placeholder={storyline}
          id="movie_storyline"
          value={newStoryline}
          onChange={(event) => setStoryline(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            className="movie_genre"
            value={newGenre}
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="movie_rating">
          Avaliação
          <input
            placeholder={rating}
            id="movie_rating"
            className="movie_rating"
            type="number"
            step={0.1}
            min={0}
            max={5}
            value={newRating}
            onChange={(event) => setRating( event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="btn_submit" className="btn-submit">
          ENVIAR
          <button
            className="btn"
            id="btn_submit"
            type="button"
            onClick={handleSubmit}
          />
        </label>
      </div>
  </form>
  );
}

export default MovieForm;
