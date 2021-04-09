import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  constructor() {
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {
    const { items, addCart } = this.props;
    const { title, id } = items;
    addCart(title, id);
  }

  render() {
    const { items } = this.props;
    const { title, price, thumbnail } = items;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          {price}
        </p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleAddClick }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/products/${items.id}`, state: { items } } } // addCart
        >
          <button type="button">VER DETALHES</button>
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default ProductList;
