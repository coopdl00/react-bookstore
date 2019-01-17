import React from 'react';
import Item from './Item';

const BookList = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Catalog</h1>
            <div className="list-group">
              <div className="list-group-item bg-success">
                <div className="row font-weight-bold align-content-left">
                  <div className="col-md-2 mt-2"><h4>Title</h4></div>
                  <div className="col-md-2 mt-2"><h4>Subtitle</h4></div>
                  <div className="col-md-2 mt-2"><h4>Author</h4></div>
                  <div className="col-md-2 mt-2"><h4>Website</h4></div>
                  <div className="col-md-2 mt-2"><h4>Price</h4></div>
                </div>
              </div>
                 {props.books? props.books.map((book, i)=> <Item book={book} key={i} addItemToCart={props.addItemToCart}/> ): ""}
            </div>
          </div>
        </div>
      </div>
  )
}

export default BookList;
