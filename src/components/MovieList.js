import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = ({movies}) => (

  <div>
    <ul>
      {movies.movieListData.map(movie =>
      <MovieListEntry key={movie.key} movie={movie} />
      )}
    </ul>
  </div>
)

export default MovieList;