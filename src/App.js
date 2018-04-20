import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from 'main-page'
import Search from 'Search'
import * as BooksAPI from 'BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
    books: []
  }

  updateShelf = (updatedBook, shelf) => {
    BooksAPI.update({ id: updatedBook.id }, shelf).then(response => {
      const newBook = Object.assign({}, updatedBook, { shelf: shelf });
      this.setState({
        books: [
          ...this.state.books.filter(book => book.id !== updatedBook.id),
          newBook
        ]
      });
    })
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} handleShelfUpdate={this.updateShelf}/>
        )}/>
        <Route path='/search' render={() => (
          <Search books={this.state.books} handleShelfUpdate={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}

export default App
