import React from 'react'

class Book extends React.Component {
  render() {
    const { book: { imageLinks, title, authors, shelf }, handleShelfUpdate } = this.props;
    const thumbnail = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : null;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url('${thumbnail}')`}}></div>
            <div className="book-shelf-changer">
              <select value={shelf || 'none'} onChange={(event => handleShelfUpdate(this.props.book, event.target.value))}>
                <option value="na" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{!!authors && authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

export default Book;
