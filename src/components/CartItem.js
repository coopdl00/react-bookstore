import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    return (
        <div className="collection-item list-group-item .d-inline-block">
          <div className="row justify-content ">
            <div className="col-md-4"><p>{this.props.book.title}</p></div>
            <div className="col-md-4"><p>{this.props.book.subtitle}</p></div>
            <div className="col-md-2"><p>{`$${this.props.book.price.toFixed(2)}`}</p></div>
            <div className="col-md-2 "><button id={this.props.book.id} className="btn-sm btn-succes" onClick={this.props.removeItemFromCart}> - </button></div>
          </div>
        </div>
           )
  }

}
export default CartItem;
