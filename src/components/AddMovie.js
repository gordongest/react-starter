import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    }

    this.handleChange = this.props.handleChange.bind(this)
  }

  render() {

    return (

      <div className="add-movie-bar">
            <input type="text"
              onChange={this.handleChange}
              placeholder="Add a movie..." />
            <div
              className="add-button"
              type="submit"
              onClick={() => {this.props.handleAddSubmit(this.state.inputVal)}}>
              add
            </div>
        </div>

    )

  }

}

export default AddMovie;