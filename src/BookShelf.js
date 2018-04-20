import React from 'react'
import BookList from 'BookList'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BookList
            list={this.props.books}
            handleShelfUpdate={this.props.handleShelfUpdate}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf;
