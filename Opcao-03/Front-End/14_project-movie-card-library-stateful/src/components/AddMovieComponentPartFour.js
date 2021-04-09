import PropTypes from 'prop-types';
import React from 'react';

class AddMovieComponentPartFour extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="genre-div">
        <label htmlFor="this-form" data-testid="genre-input-label">
          Gênero
          <select
            value={value}
            data-testid="genre-input"
            onChange={handleChange}
            name="genre"
            id="genero"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

AddMovieComponentPartFour.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};


export default AddMovieComponentPartFour;
