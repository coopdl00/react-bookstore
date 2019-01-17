import React, { Component } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import SortBy from './components/SortBy';
import './App.css';

class App extends Component {
  state={
  }

  componentDidMount = async() => {
    const response = await fetch('http://localhost:8082/api/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const books = await response.json()
    const newState = {books:[...books]}
    newState['searchText'] = ""
    this.setState(newState)
  }

  addItemToCart = (event) => {
    const newState = {...this.state}
    newState.books[event.target.id-1].inCart = true
    this.setState(newState)
  }

  removeItemFromCart = (event) => {
    const newState = {...this.state}
    newState.books[event.target.id-1].inCart = false
    this.setState(newState)
  }

  sortByTitle = () => {
    const newState = {...this.state}
    newState.books = this.state.books.sort((book1, book2)=> (book1.title < book2.title) ? -1 : (book1.title < book2.title) ? 1 : 0 )
    this.setState(newState)
  }

  sortByAuthor = () => {
    const newState = {...this.state}
    newState.books = this.state.books.sort((book1, book2)=> (book1.author < book2.author) ? -1 : (book1.author < book2.author) ? 1 : 0 )
    this.setState(newState)
  }

  render() {
    return (<div className="row">
              <div className="col-9">
                  <SearchBar/>
                  <SortBy sortByTitle={this.sortByTitle} sortByAuthor={this.sortByAuthor}/>
                  <BookList books={this.state.books} addItemToCart={this.addItemToCart} searchText={this.state.searchText}/>
              </div>
              <div className="col-3">
                <Cart books={this.state.books} removeItemFromCart={this.removeItemFromCart}/>
              </div>
            </div>
          )
  }

}
export default App;
