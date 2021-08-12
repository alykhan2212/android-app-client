require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//Graphql
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 3000;

(async () => {

  app.use(cors());

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
        'editor.fontSize': 18,
      },
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api' });

  app.use('/', (req, res) => {
    res.send("Hello ! I am express");
  });

  app.listen(PORT, () => {
    console.log("express server started");
  });

})();
