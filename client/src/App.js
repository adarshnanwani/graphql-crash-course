import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
