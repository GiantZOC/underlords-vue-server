const {gql} = require('apollo-server-lambda');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String!
    img: String!
    description: String!
    tier: Int!
    type: String!
    flavortext: String!
  }
  
  
  type Query {
    getItems: [Item]
  }
`;

module.exports = typeDefs;