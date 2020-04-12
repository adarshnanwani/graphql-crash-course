const express = require('express');
const graphqlHTTP = require('express-graphql');
require('dotenv').config({
  path: './.env',
});
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
