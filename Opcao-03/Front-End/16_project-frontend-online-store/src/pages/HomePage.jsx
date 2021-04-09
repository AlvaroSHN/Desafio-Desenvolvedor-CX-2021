/*  eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      categoryId: '',
      categorySelected: '',
      products: [],
      categories: [],
    };
    this.onClick = this.onClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((value) => this.setState({
      categories: value,
    }));
  }

  onClick() {
    const { categoryId } = this.state;
    const query = document.getElementById('search-label').value;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((items) => this.setState({
        products: items.results,
      }));
  }

  handleInputChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleSelect({ target }) {
    const resposta = await api.getProductsFromCategoryAndQuery(target.id, target.value);
    if (resposta) {
      this.setState({
        products: resposta.results,
        categorySelected: target.value,
        categoryId: target.id,
      });
    }
  }

  render() {
    const { addCart, cartItem, cartCount } = this.props;
    const { products, categories } = this.state;
    return (
      <div>
        <label htmlFor="search-label">
          <input
            data-testid="query-input"
            type="text"
            id="search-label"
            onChange={ this.handleInputChange }
          />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/cart">
          <button data-testid="shopping-cart-button" type="button">CARRINHO</button>
        </Link>
        <button type="button" onClick={ this.onClick } data-testid="query-button">
          Buscar
        </button>
        <div>
          {products.map((items) => (<ProductList
            key={ items.id }
            items={ items }
            addCart={ addCart }
            cartItem={ cartItem }
            cartCount={ cartCount }
          />))}
        </div>
        <div>
          {categories.map((items) => (<CategoryList
            key={ items.id }
            onClick={ this.handleSelect }
            items={ items }
          />))}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  cartItem: PropTypes.arrayOf.isRequired,
  cartCount: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
};

export default HomePage;
