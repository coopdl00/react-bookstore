import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {

  getItemsInCart = () => {
    return this.props.books.filter(book=> book.inCart)
  }

  getTotal = () => {
    return this.getItemsInCart().reduce((total,book)=> total+book.price, 0)
  }

  render() {
    return (
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h1>Cart (Check Out here)</h1>
                    <div className="list-group">
                        {this.props.books? this.getItemsInCart().map((book, i)=> <CartItem book={book} key={i} removeItemFromCart={this.props.removeItemFromCart}/> ) : ""}
                      <div className="list-group-item .d-inline-block">
                       {this.props.books && this.getItemsInCart().length > 0? `Total: $${ this.getTotal().toFixed(2)}` : `Add Items to your shopping cart by click the Add button next to the item you would like to purchase`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           )
  }

}
export default Cart;
