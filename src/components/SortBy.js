import React, { Component } from 'react';

class SortBy extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button className="btn btn-success" onClick={this.props.sortByTitle}>Sort By Title</button>
            <button className="btn btn-success" onClick={this.props.sortByAuthor}>Sort By Author</button>
          </div>
        </div>
      </div>
    )
  }

}
export default SortBy;
