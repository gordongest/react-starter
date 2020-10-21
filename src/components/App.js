import React from 'react';
import movieListData from '../data/movieListData.js';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';
import SearchBar from './Search.js';


class App extends React.Component {
  constructor() {
    super();
  }

  handleClick(e) {
    console.log('clicked!')
  }

  render() {

    return (

    <div>
     <nav className="nav-bar">
        <NavBar />
      </nav>
      <div>
        <SearchBar handleClick={this.handleClick} />
        <div className="movie-list">
          <MovieList movies={movieListData} />
        </div>
      </div>
    </div>
  )}
}

export default App;
