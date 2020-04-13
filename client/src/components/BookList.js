import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

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

BookList.propTypes = {};

export default graphql(getBooksQuery)(BookList);
