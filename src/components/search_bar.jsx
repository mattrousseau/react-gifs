import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default SearchBar;
