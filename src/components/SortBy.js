import React, { Component } from 'react';

class SortBy extends Component {

  render() {
    return (
      <div className="container">
        <button className="btn btn-success mx-5" onClick={this.props.sortByTitle}>Sort By Title</button>
        <button className="btn btn-success mx-5" onClick={this.props.sortByAuthor}>Sort By Author</button>
      </div>
    )
  }

}
export default SortBy;
