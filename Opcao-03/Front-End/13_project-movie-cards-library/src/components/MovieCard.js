import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt="Movie Poster" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <span className="movie-card-rating">
            <Rating rating={rating} />
          </span>
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    rating: 'rating',
    imagePath: 'imagePath',
  },
};

MovieCard.propTypes = {
  movie: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.string,
    imagePath: PropTypes.string,
  },
};

export default MovieCard;
