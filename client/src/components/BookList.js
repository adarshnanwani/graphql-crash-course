import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = ({ data: { loading, books } }) => {
  const [selectedBook, setSelectedBook] = useState('');

  const displayBooks = () => {
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return (
        books &&
        books.map((book) => (
          <li key={book.id} onClick={() => setSelectedBook(book.id)}>
            {book.name}
          </li>
        ))
      );
    }
  };

  return (
    <div>
      <h2>Reading List</h2>
      <ul id='book-list'>{displayBooks()}</ul>
      <BookDetails id={selectedBook} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
