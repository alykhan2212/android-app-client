require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const PORT = process.env.PORT || 3000;

module.exports = async function startApolloServer() {
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
    const app = express();
    apolloServer.applyMiddleware({ app, path: '/api' });
    return await new Promise(resolve => app.listen(PORT, resolve));
}
