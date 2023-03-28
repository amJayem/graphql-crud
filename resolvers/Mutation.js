const _ = require('lodash')
const Recipe = require('../models/Recipe')

exports.Mutation = {
  addProduct: (parent, args, context) => {
    // console.log(parent, args)
    const product = args.input
    const products = context.db.products
    const lastId = products[products.length - 1].id
    product.id = lastId + 1
    products.push(product)
    return product
  },
  updateProduct: (parent, args, context) => {
    const { id, newProductName, newProductPrice } = args.input
    let updatedProduct
    const products = context.db.products
    products.forEach((product) => {
      if (product.id === id) {
        product.name = newProductName
        product.price = newProductPrice
        updatedProduct = product
      }
    })
    return updatedProduct
  },
  deleteProduct: (parent, { id }, context) => {
    let products = context.db.products
    _.remove(products, (product) => product.id === id)
    return null
  },

  async createRecipe(_, { recipeInput: { name, description } }) {
    const createdRecipe = new Recipe({
      name: name,
      description: description
    })

    const res = await createdRecipe.save() // mongodb saving

    return {
      id: res.id,
      ...res._doc
    }
  },
  async deleteRecipe(_, { ID }) {
    const deleted = (await Recipe.deleteOne({ _id: ID })).deletedCount
    return deleted
  },
  async editRecipe(_, { ID, recipeInput: { name, description } }) {
    const edited = (
      await Recipe.updateOne(
        { _id: ID },
        { name: name, description: description }
      )
    ).modifiedCount
    return edited
  }
}
