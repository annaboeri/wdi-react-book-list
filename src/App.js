import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import BookList from './BookList.js'
import BookDetail from './BookDetail'
import './App.css'

// OUR TOP 100 BOOKS IS A JSON ARRAY THAT CAN BE IMPORTED AND IS PARSED AUTOMATICALLY!
import books from './books.json'
console.log(books)

class App extends Component {

  state = {
    books: books
  }

  render() {
    return (
      <div className="App">
        {/* Redirect to "/books" from the "/" root URL */}
        <Route exact path="/" render={() => {
          return <Redirect to="/books" />
        }} />

        <div className="section">
          {/* TITLE */}
          <h1 className="title is-1 has-text-centered">Top 100 Books Of All Time</h1>
          
          <div className="columns">
            
            {/* Left Column */}
            <div className="column is-4">
            <Route path="/books" render={() => {
                return <BookList books={this.state.books} />
            }} />
            </div>

            {/* Right Column */}
            <div className="column is-8">
                <Route path="/books/:id" render={(routeProps) => {
                  console.log(routeProps.match.params.id)
                  const book = this.state.books.find((b) => b._id === routeProps.match.params.id)
                    return <BookDetail book={book}  />
                }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
