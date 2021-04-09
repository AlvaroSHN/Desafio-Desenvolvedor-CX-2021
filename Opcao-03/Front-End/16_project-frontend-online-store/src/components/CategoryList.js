import PropTypes from 'prop-types';
import React from 'react';

class CategoryList extends React.Component {
  constructor() {
    super();


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    onClick(event);
  }

  render() {
    const { items } = this.props;
    const { id, name } = items;
    return (
      <div>
        <input
          type="radio"
          name="category"
          value={ name }
          id={ id }
          data-testid="category"
          onClick={ this.handleSubmit }
        />
        <label htmlFor={ id }>{ name }</label>
      </div>
    );
  }
}

CategoryList.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryList;
