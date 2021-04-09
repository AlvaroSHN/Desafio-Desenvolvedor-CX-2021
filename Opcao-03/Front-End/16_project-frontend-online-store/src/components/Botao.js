import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Botao extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItem: [],
      cartCount: '0',
    };

    this.addOnClick = this.addOnClick.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  addCart(productName, productId) {
    this.setState((prevState) => ({
      cartItem: prevState.cartItem.concat({ name: productName, id: productId }),
      cartCount: (Number(prevState.cartCount) + 1).toString(),
    }));
  }

  addOnClick() {
    const { items } = this.props;
    const { title, id } = items;
    this.addCart(title, id);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addOnClick }
        >
          Adicionar ao Carrinho
        </button>
        <Link to="/">
          <button type="button">
            Página inicial
          </button>
        </Link>
      </div>
    );
  }
}

Botao.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Botao;
