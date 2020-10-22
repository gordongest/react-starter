import React from 'react';
import MovieListEntry from './MovieListEntry.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      noMatch: 0
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.searchVal !== nextProps.searchVal) {
      return true;
    }
    return false;
  }

  render() {

    return (

      <div>
        <ul>
          {this.props.movies.movieListData.map((movie) => {
            if (!this.props.searchVal.length) {
              return <MovieListEntry key={movie.key} movie={movie} />
            } else if (this.props.searchVal.length) {
              if (movie.title.toLowerCase().includes(this.props.searchVal.toLowerCase())) {
                return <MovieListEntry key={movie.key} movie={movie} />
              {/* } else {
                this.state.noMatch++;
                if (this.state.noMatch < 2) {
                  return <div>No movies match your search.</div>
                } */}
              }
            }
          })}
        </ul>
      </div>
    )

  }
}

export default MovieList;