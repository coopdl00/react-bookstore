import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
        <div className="collection-item list-group-item .d-inline-block">
          <div className="row justify-content ">
            <div className="col-md-2"><p>{this.props.book.title}</p></div>
            <div className="col-md-2"><p>{this.props.book.subtitle }</p></div>
            <div className="col-md-2"><p>{this.props.book.author}</p></div>
            <div className="col-md-2 .t"><a href={this.props.book.website}>{this.props.book.title}</a></div>
            <div className="col-md-2"><p>{`$${this.props.book.price.toFixed(2)}`}</p></div>
            <div className="col-md-1"><button id={this.props.book.id} className="btn btn-success" onClick={this.props.addItemToCart}>Add to Cart</button></div>
          </div>
        </div>
      )
  }

}
export default Item;
