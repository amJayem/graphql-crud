const { gql } = require('apollo-server')

exports.typeDefs = gql`
  type Query {
    products: [Products!]!
    getAllProducts(amount: Int): [Products!]!
    product(id: ID!): Products
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
  }

  type Recipe {
    name: String
    description: String
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
    addProduct(input: ProductInput!): Products!
    deleteProduct(id: ID!): Boolean
    updateProduct(id: ID!, input: UpdateProductInput!): Boolean

    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
  }

  input ProductInput {
    name: String!
    price: Float!
    onSale: Boolean!
    description: String!
    quantity: Int!
    image: String!
    categoryId: ID!
  }

  input UpdateProductInput {
    name: String
    price: Int
    description: String
    quantity: Int
    image: String
    onSale: Boolean
    categoryId: ID
  }

  input RecipeInput {
    name: String
    description: String
  }
`
