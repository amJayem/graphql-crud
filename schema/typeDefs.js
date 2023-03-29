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
    addProduct(input: AddProduct!): Products
    updateProduct(input: UpdateProduct!): Products
    deleteProduct(id: ID!): Products

    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
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

  input RecipeInput {
    name: String
    description: String
  }
`
