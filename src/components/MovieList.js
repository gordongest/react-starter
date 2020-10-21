import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = ({movies}) => (

  <div>
    <ul>
      {movies.map(movie =>
      <MovieListEntry movie={movie} />
      )}
    </ul>
  </div>
)

export default MovieList;