import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  Login, EditMovie, MovieDetails, MovieList, NewMovie, NotFound, Register
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
