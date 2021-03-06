import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { connect } from 'react-redux';
import { fetchDrinksById } from '../services';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

class DrinksRecipesInProgress extends React.Component {
  constructor() {
    super();
    this.state = {
      Drink: [],
      Ingredients: [],
      Measures: [],
      checkedItems: [],
      disabledButton: false,
      Update: false,
    };
    this.handleIngredients = this.handleIngredients.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.setDrinkState = this.setDrinkState.bind(this);
    this.checked = this.checked.bind(this);
    this.checkedItems = this.checkedItems.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.setRecipesLocalStorage = this.setRecipesLocalStorage.bind(this);
    this.check = this.check.bind(this);
    this.getRecipesLocalStorage = this.getRecipesLocalStorage.bind(this);
    this.setKeyLocalStorage = this.setKeyLocalStorage.bind(this);
  }

  async componentDidMount() {
    const { history: { location: { pathname } } } = this.props;
    const endpoint = pathname.split('/')[2];
    const drinkRecipe = await fetchDrinksById(Number(endpoint));
    this.setDrinkState(drinkRecipe);
    this.handleIngredients();
    this.checkedItems();
  }

  handleIngredients() {
    const ingredientArray = [];
    const measureArray = [];
    let ingredient;
    let measure;
    const { Drink } = this.state;
    Drink.map((recipe) => {
      const twenty = 20;
      for (let index = 1; index <= twenty; index += 1) {
        ingredient = `strIngredient${index}`;
        measure = `strMeasure${index}`;
        ingredientArray.push(recipe[ingredient]);
        measureArray.push(recipe[measure]);
      }
      const filteredIngredients = ingredientArray
        .filter((item) => item !== '' && item !== null && item !== undefined);

      const filteredMeasure = measureArray
        .filter((item) => item !== '' && item !== null && item !== undefined);

      this.setIngredients(filteredIngredients, filteredMeasure);
      return null;
    });
  }

  async handleShareDrink({ target }, { idDrink }) {
    const three = 3;
    console.log((target.parentNode).childNodes.length);
    if ((target.parentNode).childNodes.length < three) {
      const { parentNode } = target;
      const paragraph = document.createElement('p');
      paragraph.innerText = 'Link copiado!';
      paragraph.style.fontSize = '8px';
      paragraph.style.fontWeight = '100';
      parentNode.appendChild(paragraph);
    }
    const url = `http://localhost:3000/bebidas/${idDrink}`;
    await copy(url);
  }

  handleButton() {
    const { checkedItems, Ingredients } = this.state;
    if (Ingredients.length === Object
      .values(checkedItems)
      .filter((item) => item).length + 1) {
      this.setState({ disabledButton: true });
    } else {
      this.setState({ disabledButton: false });
    }
  }

  setRecipesLocalStorage(updateCheck) {
    const localStorageMeals = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const idCurrent = Object.keys(localStorageMeals.cocktails)[0];
    localStorageMeals.cocktails[idCurrent] = updateCheck;
    localStorage.setItem('inProgressRecipes', JSON.stringify(localStorageMeals));
  }

  getRecipesLocalStorage() {
    const verifyLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (verifyLocalStorage) {
      const idCurrent = Object.keys(verifyLocalStorage.cocktails)[0];
      const listVefify = verifyLocalStorage.cocktails[idCurrent];
      return listVefify;
    }
  }

  setDrinkState(Drink) {
    this.setState({
      Drink,
    });
  }

  setIngredients(Ingredients, Measures) {
    this.setState({
      Ingredients,
      Measures,
    });
  }

  setLocalState(recipe) {
    const myObject = [{
      id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    }];
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(myObject));
    }
    const myLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const shareButton = document.querySelector('.fav-button');
    const blackHeart = 'http://localhost:3000/static/media/blackHeartIcon.b8913346.svg';
    const zero = 0;
    const minusOne = -1;
    if (shareButton.src === blackHeart && myLocalStorage) {
      const itemToRemove = myLocalStorage
        .find((element) => (element.id === recipe.idDrink));
      const indexToRemove = myLocalStorage.indexOf(itemToRemove, zero);
      if (indexToRemove !== minusOne) {
        myLocalStorage.splice(indexToRemove, 1);
        localStorage.setItem('favoriteRecipes', JSON.stringify(myLocalStorage));
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(myLocalStorage)); // assim remove
    } else {
      const MyLSObj = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const combineObjects = MyLSObj.concat(myObject);
      localStorage.setItem('favoriteRecipes', JSON.stringify(combineObjects)); // assim add
    }
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const filteredStorage = favRecipes
      .filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i); // s?? registra um ??nico id
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredStorage));
    const { Update } = this.state;
    this.setState({ Update: !Update });
  }

  getFullDate() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const fullDate = `${day}/${month + 1}/${year} ${hours}:${minutes}:${seconds}`;
    return fullDate;
  }

  setKeyLocalStorage() {
    const verifyLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { history: { location: { pathname } } } = this.props;
    const endpoint = pathname.split('/')[2];
    const recipesInProgress = {
      cocktails: { [endpoint]: [] },
      meals: { },
    };
    if (!verifyLocalStorage) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
    }
  }

  checkedItems() {
    const getCheckedItems = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getCheckedItems) {
      const idCurrent = Object.keys(getCheckedItems.cocktails)[0];
      const checkado = getCheckedItems.cocktails[idCurrent];
      this.setState({ checkedItems: checkado });
    }
  }

  checked(e) {
    const { checkedItems } = this.state;
    const { value, checked } = e.target;
    const searchIndex = checkedItems.includes(value);
    this.setKeyLocalStorage();
    if (!searchIndex) {
      const updateCheck = checkedItems.concat(value);
      this.setState({ checkedItems: updateCheck });
      this.setRecipesLocalStorage(updateCheck);
    } else if (!checked) {
      const positionCheck = checkedItems.indexOf(value);
      const originalChecked = checkedItems;
      originalChecked.splice(positionCheck, 1);
      this.setState({ checkedItems: originalChecked });
      this.setRecipesLocalStorage(originalChecked);
    }
    const inputsList = document.querySelectorAll('input[type=checkbox]');
    inputsList.forEach((item) => {
      if (item.checked === true) {
        item.parentNode.className = 'styled';
        item.parentNode.checked = true;
        item.parentNode.checked = 'check';
      } else {
        item.parentNode.className = 'not-styled';
      }
    });
  }

  changeFavoriteIcon(recipe) {
    if (localStorage.favoriteRecipes) {
      const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const receitaAtual = favRecipes.find((element) => (element.id === recipe.idDrink));
      if (favRecipes.includes(receitaAtual)) {
        return blackHeartIcon;
      }
      return whiteHeartIcon;
    }
    return whiteHeartIcon;
  }

  recipeDone(recipe) {
    const { history } = this.props;
    const fullDate = this.getFullDate();

    let myTags = recipe.strTags;
    if (myTags === null) {
      myTags = 'No Tags';
    }
    const myObject = [{
      id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneDate: fullDate,
      tags: myTags,
    }];

    if (!localStorage.getItem('doneRecipes')) {
      localStorage.setItem('doneRecipes', JSON.stringify(myObject));
    }
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const combinedObjects = doneRecipes.concat(myObject);
    localStorage.setItem('doneRecipes', JSON.stringify(combinedObjects)); // assim add
    const filteredStorage = combinedObjects
      .filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i); // s?? registra um ??nico id
    localStorage.setItem('doneRecipes', JSON.stringify(filteredStorage));
    localStorage.removeItem('inProgressRecipes');
    history.push('/receitas-feitas');
  }

  check() {
    const { checkedItems } = this.state;
    const length = 0;
    const verifyLocalStorage = this.getRecipesLocalStorage();
    if (checkedItems.length === length && verifyLocalStorage) {
      const getCheckedItems = this.getRecipesLocalStorage();
      return getCheckedItems;
    }
    const inputsList = document.querySelectorAll('input[type=checkbox]');
    inputsList.forEach((item) => {
      if (item.checked === true) {
        item.parentNode.className = 'styled';
        item.parentNode.checked = true;
        item.parentNode.checked = 'check';
      } else {
        item.parentNode.className = 'not-styled';
      }
    });
    return checkedItems;
  }

  render() {
    const { Drink, Ingredients, Measures, disabledButton } = this.state;
    const getChecked = this.check();
    return (
      <div className="food-drink-detail-container">
        {Drink ? Drink.map((recipe, index) => (
          <div className="detail-card" key={ index }>
            <img
              src={ recipe.strDrinkThumb }
              data-testid="recipe-photo"
              alt="recipe-img"
            />
            <div className="details-title-div">
              <div className="recipe-title">
                <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
                <p data-testid="recipe-category">{recipe.strCategory}</p>
              </div>
              <div className="recipe-buttons">
                <div>
                  <input
                    type="image"
                    data-testid="share-btn"
                    className="share-btn"
                    src={ shareIcon }
                    alt="shareIcon"
                    onClick={ (event) => this.handleShareDrink(event, recipe) }
                  />
                  <input
                    type="image"
                    data-testid="favorite-btn"
                    className="fav-button"
                    src={ this.changeFavoriteIcon(recipe) }
                    onClick={ () => this.setLocalState(recipe) }
                    alt="whiteHeartIcon"
                  />
                </div>
              </div>
            </div>
            <hr className="card-hr" />
            <h2>Ingredients</h2>
            <div className="ingredients">
              {Ingredients.map((recipes, i) => (
                <div key={ i }>
                  <label
                    className="detail-ingredients"
                    htmlFor={ `ingredient ${i}` }
                    data-testid={ `${i}-ingredient-step` }
                  >
                    <input
                      id={ `ingredient ${i}` }
                      name={ `ingredient ${i}` }
                      type="checkbox"
                      onClick={ (e) => {
                        this.checked(e);
                        this.handleButton();
                      } }
                      value={ i }
                      checked={ getChecked.includes(String(i)) }
                    />
                    {recipes}
                    -
                    { Measures[i] }
                  </label>
                </div>
              ))}
            </div>
            <h2 data-testid="instructions">Instructions</h2>
            <div className="detail-instructions">{recipe.strInstructions}</div>
            <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
            <button
              data-testid="finish-recipe-btn"
              type="button"
              onClick={ () => this.recipeDone(recipe) }
              className="start-recipe"
              disabled={ !disabledButton }
            >
              Finalizar Receita
            </button>
          </div>
        )) : null }
      </div>);
  }
}

const mapStateToProps = (state) => ({
  idCurrent: state.menu.currentID,
});

DrinksRecipesInProgress.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, null)(DrinksRecipesInProgress);
