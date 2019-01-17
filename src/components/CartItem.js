import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    return (
      <div className="list-group">
        <div className="list-group-item bg-success">
          <div className="row font-weight-bold align-content-left">
            <div className="col-md-4 mt-2"><h4>Title</h4></div>
            <div className="col-md-4 mt-2"><h4>Author</h4></div>
            <div className="col-md-2 mt-2"><h4>Price</h4></div>
          </div>
        </div>
        <div className="collection-item list-group-item .d-inline-block">
          <div className="row justify-content ">
            <div className="col-md-4"><p>{this.props.book.title}</p></div>
            <div className="col-md-4"><p>{this.props.book.author}</p></div>
            <div className="col-md-2"><p>{`$${this.props.book.price.toFixed(2)}`}</p></div>
            <div className="col-md-2 "><button id={this.props.book.id} className="btn-sm btn-danger" onClick={this.props.removeItemFromCart}> - </button></div>
          </div>
        </div>
      </div>
           )
  }

}
export default CartItem;
