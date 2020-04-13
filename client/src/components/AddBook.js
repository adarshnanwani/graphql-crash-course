import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';
const compose = _.flowRight;

const AddBook = ({
  getAuthorsQuery: { loading, authors },
  addBookMutation,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { name, genre, authorId } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return (
        authors &&
        authors.map((author) => (
          <option value={author.id} key={author.id}>
            {author.name}
          </option>
        ))
      );
    }
  };

  const addBook = (e) => {
    e.preventDefault();
    addBookMutation({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    setFormData({
      name: '',
      genre: '',
      authorId: '',
    });
  };

  return (
    <form id='add-book' onSubmit={addBook}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' name='name' value={name} onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' name='genre' value={genre} onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select
          value={genre}
          name='authorId'
          value={authorId}
          onChange={handleChange}
        >
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

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
