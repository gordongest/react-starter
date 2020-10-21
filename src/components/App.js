import React from 'react';
import movieListData from '../data/movieListData.js';
import NavBar from './NavBar.js';
import MovieList from './MovieList.js';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (

    <div>
      <NavBar />
      <div>
        <MovieList movies={movieListData} />
      </div>
    </div>
  )}
}

export default App;
