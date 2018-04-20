import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class Search extends Component {
  state = {
    results: []
  }

  onChange = (e) => {
    this.searchBooks(e.target.value.trim());
  }

  // use this updateResults to avoid refresh of the page
  updateResults = (updatedBook, shelf) => {
    const index = this.state.results.indexOf(updatedBook);
    const newBook = Object.assign({}, updatedBook, { shelf: shelf });
    this.setState({
      results: this.state.results.splice(index, 0, newBook)
    });
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then(res => {
        this.props.books.forEach(shelvedBook => {
          const match = res.find((resultBook) => resultBook.id === shelvedBook.id);
          if (match) {
            match.shelf = shelvedBook.shelf;
          }
        })
        this.setState({ results: res });
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className='search-books-bar'>
          <Link className="close-search" to='/'/>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={this.onChange}
            />
          </div>
        </div>
        { this.state.results.length > 0 && (
          <div className="search-books-results">
            <BookList
              books={this.state.results}
              changeShelf={(book, value) => {
                this.props.changeShelf(book, value);
                this.updateResults(book, value);
              }}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Search;
