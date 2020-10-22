import React from 'react';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      watched: false
    }

    this.handleWatched = this.handleWatched.bind(this)
  }

  handleWatched() {
    this.setState({
      watched: !this.state.watched
    }, function() {
      console.log('watched:', this.state.watched)
    });
  }

  render() {

    const { movie } = this.props

    return (

      <li className="movie-entry">
        {movie.title}
        <button
          type="submit"
          className="watch-button"
          onClick={() => {this.handleWatched()}}>
          watched
        </button>
      </li>

    )
  }
}

export default MovieListEntry;