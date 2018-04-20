import React from 'react'
import Book from './Book'

class BookList extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {
          this.props.books.map((book) =>
            <Book
              key={ book.id }
              book={ book }
              changeShelf={ this.props.changeShelf }
            />
          )
        }
      </ol>
    )
  }
}

export default BookList;
