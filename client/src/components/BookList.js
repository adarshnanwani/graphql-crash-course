import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

const BookList = ({ data: { loading, books } }) => {
  const displayBooks = () => {
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return books && books.map((book) => <li key={book.id}>{book.name}</li>);
    }
  };

  return (
    <div id='book-list'>
      <h2>Reading List</h2>
      <ul>{displayBooks()}</ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
