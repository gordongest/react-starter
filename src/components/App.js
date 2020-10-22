import React from 'react';
import movieListData from '../data/movieListData.js';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: {movieListData},
      searchVal: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(val) {
    console.log('clicked!');
    this.setState({
      searchVal: val
    }, function() {console.log(this.state)});
  }

  render() {

    return (

    <div>
     <nav className="nav-bar">
        <NavBar />
      </nav>
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="movie-list">
          <MovieList movies={this.state.movieList} />
        </div>
      </div>
    </div>
  )}
}

export default App;
