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

    var bgColor = {
      backgroundColor: 'white'
    }

    var watchText = 'watch'

    if (this.state.watched === true) {
      bgColor = {
        backgroundColor: '#FF687E',
        color: 'white'
      };
      watchText = 'watched';
    }

    return (

      <div className="movie-entry fade-in">
        <div className="movie-title">{movie.title}</div>
        <div
          className="watch-button"
          onClick={() => {this.handleWatched()}}
          style={bgColor}>
          {watchText}
        </div>
      </div>

    )
  }
}

export default MovieListEntry;