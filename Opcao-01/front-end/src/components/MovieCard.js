import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      title, imagePath, storyline, id, quantity
    } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h4 className="movie-card-title">{title}</h4>
        <span>Quantidade: {quantity}</span>
        <img className="movie-card-image" src={imagePath} alt="movie" />
        <p className="movie-card-storyline">{storyline}</p>
        <Link className="view-details" to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
