const { ApolloServer } = require('apollo-server')
const { Query } = require('./resolvers/Query')
const { typeDefs } = require('./schema/typeDefs')
const { db } = require('./database/db')
const { Products } = require('./resolvers/Products')
const { Mutation } = require('./resolvers/Mutation')
const mongoose = require('mongoose')

const uri = `mongodb+srv://user:password@cluster0.42e2srw.mongodb.net/?retryWrites=true&w=majority`
// pass = jYrGHg3HHrb4TCgS
// user = graphQL

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Products,
    Mutation
  },
  context: {
    db
  }
})

mongoose.connect(uri).then(async () => {
  console.log('mongodb connected')
  const { url } = await server.listen()
  console.log('server is running: ', url)
})
