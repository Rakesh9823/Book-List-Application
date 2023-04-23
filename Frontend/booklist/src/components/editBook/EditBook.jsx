import React from 'react'
import "../editBook/EditBook.css"
const EditBook = () => {
  return (
    <div className='editBookContainer'>
        <div className='editBookContent'>
        <button className='showBookList'>
                Show Book List
            </button>
            <h1>Edit Book</h1>
            <h3>update book's info</h3>
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

                <button className='updateBtn'>Update Book</button>
            </form>
        </div>

    </div>
  )
}

export default EditBook