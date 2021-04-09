import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
      cartCount: '0',
      doneArray: [],
    };
    this.addCart = this.addCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    this.arrumaessearray = this.arrumaessearray.bind(this);
  }

  arrumaessearray(cartItem) {
    //um novo nao entra, so um repetido
    //  Altera meu array para unir as chaves repetidas e criar um novo array de quantidade
    const transformArray = Object.values(cartItem.reduce((e, { name, id, ...props }) => {
      if (!e[name]) e[name] = { name, id, cont: [props] };
      else e[name].cont.push(props);
      return e;
    }, {}));

    //  Aplica um segundo mapa no array de quantidade
    const filteredArray = transformArray.map((e) => {
      let contador = 0;
      e.cont.map((a) => {
        contador += a.cont;
        return contador;
      });
      const returnedObject = {
        name: e.name,
        id: e.id,
        cont: contador,
      };
      return returnedObject;
    });
    return filteredArray.sort((a, b) => {
      if (a.cont > b.cont) {
        return 1;
      }
      if (a.cont < b.cont) {
        return -1;
      }
      return 0;
    });
  }

  addCart(productName, productId) {
    const { cartItem } = this.state;
    // console.log(cartItem.length);
    // if (cartItem.length === 0) {
    //   this.setState((prevState) => ({
    //     cartItem: prevState.cartItem.concat({
    //       name: productName, id: productId, cont: 1 }),
    //     cartCount: (Number(prevState.cartCount) + 1).toString(),
    //     doneArray: prevState.doneArray.concat((
    //       this.arrumaessearray(prevState.cartItem.concat({
    //         name: productName, id: productId, cont: 1,
    //       })))),
    //   }));
    // }
    // if (cartItem.length > 0) {
    this.setState((prevState) => ({
      cartItem: prevState.cartItem.concat({
        name: productName, id: productId, cont: 1 }),
      cartCount: (Number(prevState.cartCount) + 1).toString(),
      doneArray: this.arrumaessearray(prevState.cartItem),
    }));
  }

  removeCart(productName) {
    const { cartItem, doneArray } = this.state;
    const removeObject = cartItem.findIndex((element) => element.name === productName);
    const rmvObject = doneArray.findIndex((element) => element.name === productName);
    const valor = doneArray[rmvObject].cont;
    doneArray[rmvObject].cont = valor - 1;
    const check = -1;
    if (removeObject > check && (valor - 1) >= 0) {
      cartItem.splice(removeObject, 1);
      this.setState((prevState) => ({
        cartItem,
        cartCount: (Number(prevState.cartCount) - 1).toString(),
        doneArray,
      }));
    }
  }

//  (Number(prevState.doneArray[rmvObject].cont - 1)),
  render() {
    // const array=[{nome: 'alvaro', id:'123', cont:1}, {nome: 'lvaro', id:'1323', cont:2},{nome: 'asd', id:'123', cont:3}];
    // console.log(array);
    // console.log(array[1].nome = 'alvaro');
    // console.log(array);
    const { cartCount, cartItem, doneArray } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ (props) => (<HomePage
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
        <Route
          exact
          path="/cart"
          render={ (props) => (<ShoppingCart
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
            removeCart={ this.removeCart }
            doneArray={ doneArray }
          />) }
        />
        <Route
          exact
          path="/products/:id"
          render={ (props) => (<ProductDetails
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
      </BrowserRouter>
    );
  }
}
export default App;
