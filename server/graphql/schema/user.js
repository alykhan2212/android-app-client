const { gql } = require('apollo-server-express');

module.exports = gql`
 type Users {
     id: Int!
     username: String!
     email: String!
     password: String!
 }
 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
     login(input: LoginInput!): LoginResponse
 }
 type RegisterResponse {
    id: Int!
    username: String!
    email: String!
 }
 input RegisterInput {
    username: String!
    email: String!
    password: String!
 }
 input LoginInput {
     email: String!
     password: String!
 }
 type LoginResponse {
    id: Int!
    username: String!
    email: String!
    token: String!
 }
`;