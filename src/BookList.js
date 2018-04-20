import React from 'react'
import Book from './Book'

class BookList extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {
          this.props.list.map((book) =>
            <Book
              key={book.id}
              book={book}
              handleShelfUpdate={this.props.handleShelfUpdate}
            />
          )
        }
      </ol>
    )
  }
}

export default BookList;
