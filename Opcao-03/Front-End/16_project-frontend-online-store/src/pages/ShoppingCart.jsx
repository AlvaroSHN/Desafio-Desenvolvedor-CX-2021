import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
    this.addShoppingCart = this.addShoppingCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

  remove({ target }) {
    const { removeCart } = this.props;
    removeCart(target.name);
  }

  add({ target }) {
    const { addCart } = this.props;
    addCart(target.name, target.id);
  }

  emptyCart() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <button type="button">
          <Link to="/">Página inicial</Link>
        </button>
      </div>
    );
  }

  increaseButton(name, id) {
    return (
      <button
        name={ name }
        id={ id }
        value="+"
        onClick={ this.add }
        type="button"
        data-testid="product-increase-quantity"
      >
        ( + )
      </button>
    );
  }

  decreaseButton(name) {
    return (
      <button
        name={ name }
        value="-"
        onClick={ this.remove }
        type="button"
        data-testid="product-decrease-quantity"
      >
        ( - )
      </button>
    );
  }

  addShoppingCart(cartItem) {
    // //  Altera meu array para unir as chaves repetidas e criar um novo array de quantidade
    // const transformArray = Object.values(cartItem.reduce((e, { name, id, ...props }) => {
    //   if (!e[name]) e[name] = { name, id, cont: [props] };
    //   else e[name].cont.push(props);
    //   return e;
    // }, {}));

    // //  Aplica um segundo mapa no array de quantidade
    // const filteredArray = transformArray.map((e) => {
    //   let contador = 0;
    //   e.cont.map((a) => {
    //     contador += a.cont;
    //     return contador;
    //   });
    //   const returnedObject = {
    //     name: e.name,
    //     id: e.id,
    //     cont: contador,
    //   };
    //   return returnedObject;
    // });
    console.log(cartItem , 'cart item');
    return (
      cartItem.map((product) => (
        <div key={ product.id }>
          <div>
            <p data-testid="shopping-cart-product-name">
              {product.name}
            </p>
            {this.increaseButton(product.name, product.id)}
            {this.decreaseButton(product.name)}
            <p data-testid="shopping-cart-product-quantity">
              { product.cont }
            </p>
          </div>
        </div>
      )));
  }

  render() {
    const { cartItem, cartCount, doneArray } = this.props;
    if (!cartItem.length) return (this.emptyCart());
    return (
      <div>
        {this.addShoppingCart(doneArray)}
        <button type="button">
          <Link to="/">Página inicial</Link>
        </button>
        <p>
          todos os produtos:
          { cartCount }
        </p>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  removeCart: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  cartItem: PropTypes.arrayOf.isRequired,
  doneArray: PropTypes.arrayOf.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default ShoppingCart;
