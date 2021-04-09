import PropTypes from 'prop-types';
import React from 'react';

class AddMovieComponentPartOne extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="title-subtitle-div">
        <label htmlFor="this-form" data-testid="title-input-label">Título
          <input
            data-testid="title-input"
            id="titulo"
            type="text"
            name="title"
            onChange={handleChange}
            value={value}
          />
        </label>
        <label htmlFor="this-form" data-testid="subtitle-input-label">Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={handleChange}
            value={value}
            id="subtitulo"
            type="text"
            name="subtitle"
          />
        </label>
      </div>
    );
  }
}

AddMovieComponentPartOne.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieComponentPartOne;
