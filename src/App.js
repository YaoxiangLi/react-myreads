import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import Search from './Search'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  changeShelf = (id, shelf) => {
    BooksAPI.update(id, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    })
  }



  render() {
    return (
      <div className="app">
          <Route
            exact
            path="/search"
            render={({history}) => (
              <Search
                myBooks={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                  history.push('/')
                }}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={()=>(
              <BookList
                books={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                }}
              />
            )}
          />
      </div>
    )
  }
  // render() {
  //   const { books } = this.state
  //   console.log(this.state.books)
  //   return (
  //     <div className="app">
  //
  //       <Route exact path="/" render={() => (
  //         <div className="list-books">
  //           <div className="list-books-title">
  //             <h1>MyReads</h1>
  //           </div>
  //           <BookList
  //             books={ books }
  //             onShelfChange={(id, shelf) => {
  //               this.changeShelf(id, shelf)
  //             }}
  //           />
  //           <div className="open-search">
  //             <Link to="/search">Add a book</Link>
  //           </div>
  //         </div>
  //         )}
  //       />
  //
  //       <Route path="/search" render={( {history} ) => (
  //           <Search
  //             myBooks={ books }
  //             onShelfChange={(id, shelf)=>{
  //               this.changeShelf(id, shelf)
  //               history.push('/')
  //             }}
  //           />
  //         )}
  //       />
  //     </div>
  //   )
  // }
}

export default BooksApp
