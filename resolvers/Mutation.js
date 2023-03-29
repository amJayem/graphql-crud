const _ = require('lodash')
const Recipe = require('../models/Recipe')
const Products = require('../models/Products')
const Reviews = require('../models/Reviews')

exports.Mutation = {
  // addProduct: (parent, args, context) => {
  //   // console.log(parent, args)
  //   const product = args.input
  //   const products = context.db.products
  //   const lastId = products[products.length - 1].id
  //   product.id = lastId + 1
  //   products.push(product)
  //   return product
  // },

  // updateProduct: (parent, args, context) => {
  //   const { id, newProductName, newProductPrice } = args.input
  //   let updatedProduct
  //   const products = context.db.products
  //   products.forEach((product) => {
  //     if (product.id === id) {
  //       product.name = newProductName
  //       product.price = newProductPrice
  //       updatedProduct = product
  //     }
  //   })
  //   return updatedProduct
  // },

  // deleteProduct: (parent, { id }, context) => {
  //   let products = context.db.products
  //   _.remove(products, (product) => product.id === id)
  //   return null
  // },

  addProduct: async (_, args) => {
    // console.log(args)
    const { name, description, quantity, price, image, onSale, categoryId } =
      args.input
    const addProduct = new Products({
      name,
      price,
      onSale,
      description,
      quantity,
      image,
      categoryId
    })

    const res = await addProduct.save()

    return {
      id: res.id,
      ...res._doc
    }
  },

  deleteProduct: async (_, args) => {
    // console.log(args)
    const deleteProduct = (await Products.deleteOne({ _id: args.id }))
      .deletedCount
    return deleteProduct
  },

  updateProduct: async (_, args) => {
    console.log(args)
    const { name, price, onSale, description, quantity, image, categoryId } =
      args.input

    const updated = (
      await Products.updateOne(
        { _id: args.id },
        { name, price, onSale, description, quantity, image, categoryId }
      )
    ).modifiedCount
    return updated
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
