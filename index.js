const { ApolloServer } = require("apollo-server");
const { Query } = require('./resolvers/Query')
const { typeDefs } = require("./schema/typeDefs")
const {db} = require("./database/db")
const { Products } = require("./resolvers/Products")
const { Mutation } = require("./resolvers/Mutation")

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Products,
    Mutation
  },
  context:{
    db
  }
});

server.listen().then(({ url }) => {
  console.log("server is running: ", url);
});
