const { ApolloServer } = require("apollo-server-lambda");
const mongoose = require("mongoose");

// import typedefa and resolvers
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// import environment variable and models
require("dotenv").config();
const Item = require("./Item");
const Alliance = require("./Alliance");
const Hero = require("./Hero");

//connect to MLab MongoDB
mongoose
  .connect(process.env.mongo_uri, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));


// Create Apollo/GraphQl Server
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  formatError: error => {
    return {
      name: error.name,
      message: error.message.replace("Context creation failed:", "")
    };
  },

  context: async ({ event, context }) => {
    return { 
      Item,
      Alliance,
      Hero
    };
  },
  playground: true,
  introspection: true
});

// cors
exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
