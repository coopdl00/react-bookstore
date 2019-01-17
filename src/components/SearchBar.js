import React, {Component} from 'react';

class SearchBar extends Component {

  render() {
    return (<div className="row">
      <div className="col-3">
        <nav className="container">
          <form>
            <div className="form-group">
              <label htmlFor="Search">Search Bar</label>
              <input type="text" className="form-control" id="SearchBar"></input>
            </div>
          </form>
        </nav>
      </div>
    </div>)
  }

}
export default SearchBar;
