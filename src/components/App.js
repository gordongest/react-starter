import React from 'react';
import movieListData from '../data/movieListData.js';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddMovie from './AddMovie.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      searchVal: '',
      keyNum: 'key'
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleAddSubmit = this.handleAddSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      inputVal: event.target.value
    }, function() {
      console.log('inputVal:', this.state.inputVal)
    });
  }

  handleSearchSubmit(val) {
    console.log('searched!')
    this.setState({
      searchVal: val
    }, function() {
      console.log(this.state)
    });
}

  handleAddSubmit(val) {
    console.log('added!');
    let newMovie = {title: val, watched: false};
    this.setState({
      movieList: [...this.state.movieList, newMovie],
      key: this.state.key + 1
    }, function() {console.log(this.state)});
  }

  render() {

    return (

    <div>
     <nav className="nav-bar">
        <NavBar />
      </nav>
      <div className="container">
        <AddMovie handleChange={this.handleChange} handleAddSubmit={this.handleAddSubmit} />
        <SearchBar handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmit} />
        <div className="movie-list">
          <MovieList searchVal={this.state.searchVal} movies={this.state.movieList} />
        </div>
      </div>
    </div>
  )}
}

export default App;
