// require('dotenv').config();
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const cors = require('cors');
// const typeDefs = require('../graphql/schema');
// const resolvers = require('../graphql/resolvers');
// const app = express();
// app.use(cors());

// const PORT = process.env.PORT || 3000;

// module.exports = async function startApolloServer() {
//     const apolloServer = new ApolloServer({
//         typeDefs,
//         resolvers,
//         introspection: true,
//         playground: {
//             settings: {
//                 'schema.polling.enable': false,
//                 'editor.fontSize': 18,
//             },
//         },
//     });

//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app, path: '/api' });

//     app.use('/', (req, res) => {
//         res.send("Hello ! I am express");
//     });

//     return await new Promise(resolve => app.listen(PORT, resolve));
// }
