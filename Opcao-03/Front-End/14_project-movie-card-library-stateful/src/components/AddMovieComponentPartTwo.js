import PropTypes from 'prop-types';
import React from 'react';

class AddMovieComponentPartTwo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="image-storyline-div">
        <label htmlFor="this-form" data-testid="image-input-label">Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="imagem"
            onChange={handleChange}
            value={value}
          />
        </label>
        <label htmlFor="this-form" data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            id="textarea"
            name="storyline"
            value={value}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

AddMovieComponentPartTwo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieComponentPartTwo;
