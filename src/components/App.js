import React from 'react';
import movieListData from '../data/movieListData.js';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: 0,
      searchVal: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    console.log('clicked!');
    this.setState({
      clicked: this.state.clicked + 1,
      searchVal: this.state.searchVal + 'T-Y '
    }, function() {console.log(this.state)});
  }

  render() {

    return (

    <div>
     <nav className="nav-bar">
        <NavBar />
      </nav>
      <div>
        <SearchBar handleClick={this.onSubmit} />
        <div className="movie-list">
          <MovieList movies={movieListData} />
        </div>
      </div>
    </div>
  )}
}

export default App;
