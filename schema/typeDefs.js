const { gql } = require('apollo-server')

exports.typeDefs = gql`
  type Query {
    products: [Products!]!
    product(id: ID!): Products
  }

  type Products {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
    reviews: [Reviews]
  }

  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  type Mutation {
    addProduct(input: AddProduct!): Products
    updateProduct(input: UpdateProduct!): Products
    deleteProduct(id: ID!): Products
  }

  input AddProduct {
    name: String!
    price: Float!
    onSale: Boolean!
  }

  input UpdateProduct {
    id: ID!
    newProductName: String!
    newProductPrice: Int!
  }
`
