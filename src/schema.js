const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type User {
    id: ID!
    username: String!
    email: String!
  }
  type Query {
    user(id: ID!):User!
  }
`;