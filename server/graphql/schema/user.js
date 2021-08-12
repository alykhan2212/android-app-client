const { gql } = require('apollo-server-express');

module.exports = gql`
 type Users {
     id: Int!
     username: String!
     email: String!
     password: String!
 }
 extend type Query {
    getAllUsers: [Users!]
}
`;