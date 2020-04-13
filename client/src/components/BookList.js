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

const BookList = (props) => {
  console.log(props.data.books);
  return (
    <div>
      <ul>
        <li>Book </li>
      </ul>
    </div>
  );
};

BookList.propTypes = {};

export default graphql(getBooksQuery)(BookList);
