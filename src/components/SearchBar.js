import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    }

    this.handleChange = this.props.handleChange.bind(this)
  }

  render() {

    return (

      <div className="search-bar">
        <input type="text"
          onChange={(event) => {this.props.handleSearchSubmit(event.target.value)}}
          placeholder="Search..." />
        <div
          className="search-button"
          type="submit"
          onClick={(event) => {this.props.handleSearchSubmit(event.target.value)}}>
          submit
        </div>
      </div>

    )

  }

}

export default SearchBar;