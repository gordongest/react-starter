import React from 'react';
import MovieListEntry from './MovieListEntry.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props)
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
      {console.log(this.props.searchVal.length)}
      <ul>
        {this.props.movies.movieListData.map((movie) => {
          {/* console.log(movie.title) */}
          if (this.props.searchVal.length === 0) {
            return <MovieListEntry key={movie.key} movie={movie} />
          } else {
            {/* console.log(movie.title); */}
            if (movie.title.toLowerCase().includes(this.props.searchVal.toLowerCase())) {
              console.log('yessir')
              return <MovieListEntry key={movie.key} movie={movie} />
            }
          }
        })}
      </ul>
    </div>
    )
  }
}

export default MovieList;