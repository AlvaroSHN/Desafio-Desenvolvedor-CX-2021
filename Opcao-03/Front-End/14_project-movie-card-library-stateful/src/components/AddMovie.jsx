import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovieComponentPartOne from './AddMovieComponentPartOne';
import AddMovieComponentPartTwo from './AddMovieComponentPartTwo';
import AddMovieComponentPartThree from './AddMovieComponentPartThree';
import AddMovieComponentPartFour from './AddMovieComponentPartFour';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick() {
    this.props.onClick(this);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    document.getElementById('titulo').value = '';
    document.getElementById('subtitulo').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('nota').value = 0;
    document.getElementById('genero').value = 'action';
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form htmlFor="this-form" data-testid="add-movie-form">
        <AddMovieComponentPartOne
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <AddMovieComponentPartTwo
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <AddMovieComponentPartThree
          value={this.state.rating}
          handleChange={this.handleChange}
        />
        <AddMovieComponentPartFour
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <button form="add-movie-form" data-testid="send-button" onClick={this.onClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
