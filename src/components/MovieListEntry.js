import React from 'react';

var MovieListEntry = ({movie}) => (
  <li className="movie-entry">
    {movie.title}
    <button
      type="button"
      className="watch-button">
      watch
    </button>
  </li>
)

export default MovieListEntry;