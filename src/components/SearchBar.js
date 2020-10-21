import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      inputVal: event.target.value
    }, function() {
      console.log('inputVal:', this.state.inputVal)
    });
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
          onClick={() => {this.props.handleSubmit(this.state.inputVal)}}>
          <span>Submit</span>
        </button>
      </div>
    )
  }

}

export default SearchBar;