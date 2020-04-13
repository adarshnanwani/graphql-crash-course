import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

const AddBook = ({ data: { loading, authors } }) => {
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return (
        authors &&
        authors.map((author) => (
          <option value={author.id}>{author.name}</option>
        ))
      );
    }
  };
  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' name='' />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' name='' />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>
        <span>+</span>
      </button>
    </form>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
