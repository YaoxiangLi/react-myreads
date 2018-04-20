import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from 'BookShelf'

const shelf = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    name: 'Want to Read'
  },
  {
    id: 'read',
    name: 'Read'
  }
]

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelf.map(shelf => (
              <BookShelf
                key={shelf.id}
                name={shelf.name}
                books={this.props.books.filter(book => book.shelf === shelf.id)}
                handleShelfUpdate={this.props.handleShelfUpdate}/>
            ))}
          </div>
          <div className="open-search">
            <Link to='/search'/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;
