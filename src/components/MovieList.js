import React from 'react';
import MovieListEntry from './MovieListEntry.js';
import noMovies from './noMovies.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      watchList: false
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.searchVal !== nextProps.searchVal) {
      console.log('rendered')
      return true;
    }
    if (this.props.movies.length !== nextProps.movies.length) {
      console.log('rendered')
      return true;
    }
    return false;
  }

  render() {

    const { searchVal, movies } = this.props;

    return (

      <div>
        {movies.map((movie) => {
          if (!searchVal.length) {
            return <MovieListEntry key={movie.key} movie={movie} />
          } else if (searchVal.length) {
            if (movie.title.toLowerCase().includes(searchVal.toLowerCase())) {
              return <MovieListEntry key={movie.key} movie={movie} />
            }
          }
        })}
      </div>
    )

  }
}

export default MovieList;