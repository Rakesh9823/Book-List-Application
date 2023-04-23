import React from 'react'
import "../addBook/AddBook.css"
const AddBook = () => {
  return (
    <div className='addBookContainer'>
        <div className='addBookContent'>
            <button className='showBookList'>
                Show Book List
            </button>
            <h1>Add Book</h1>
            <h3>create new book</h3>
            <form>
                <div className="title">
                    <input type="text" placeholder='title of the book' />
                </div>
                <div className="isbn">
                    <input type="text" placeholder='ISBN' />
                </div>
                <div className="author">
                    <input type="text" placeholder='Author' />
                </div>
                <div className="describe">
                    <input type="text" placeholder='Describe this book' />
                </div>
                <div className="date">
                    <input type="text" placeholder='published date' />
                </div>
                <div className="publisherName">
                    <input type="text" placeholder='Publisher of this book' />
                </div>

                <button className='submitBtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBook