import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
  render() {
    const books = this.props.books
    const shelfs = [
      {
        name: "currentlyReading",
        title: "Currently Reading"
      },
      {
        name: "wantToRead",
        title: "Want to Read"
      },
      {
        name: "read",
        title: "Read"
      },
    ]
    return (
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf, index) => (
            <BookShelf
              key={ index }
              title={ shelf.title }
              books={ books.filter((book) => book.shelf === shelf.name)}
              onShelfChange={(id, shelf) => {
                this.props.onShelfChange(id, shelf)
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default BookList;
