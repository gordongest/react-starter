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
          onChange={this.handleChange}
          placeholder="Search..." />
        <button
          className="search-button"
          type="submit"
          onClick={() => {this.props.handleSearchSubmit(this.state.inputVal)}}>
          Submit
        </button>
      </div>

    )

  }

}

export default SearchBar;