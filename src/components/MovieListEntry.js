import React from 'react';

var MovieListEntry = ({movie}) => (
  <li>{movie.title}<button>watch</button></li>
)

export default MovieListEntry;