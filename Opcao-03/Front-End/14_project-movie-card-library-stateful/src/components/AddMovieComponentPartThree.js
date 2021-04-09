import PropTypes from 'prop-types';
import React from 'react';

class AddMovieComponentPartThree extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="rating-div">
        <label htmlFor="this-form" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            onChange={handleChange}
            value={value}
            name="rating"
            id="nota"
            type="number"
          />
        </label>
      </div>
    );
  }
}

AddMovieComponentPartThree.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};


export default AddMovieComponentPartThree;
