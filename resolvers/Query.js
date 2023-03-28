const Recipe = require('../models/Recipe')

exports.Query = {
  products: (parent, args, context) => {
    const { db } = context
    return db.products
  },
  product: (parent, args, { db }) => {
    const { id } = args
    return db.products.find((product) => product.id === id)
  },

  async recipe(_, { ID }) {
    console.log(ID)
    return await Recipe.findById({ _id: ID })
  },
  async getRecipes(_, { amount }) {
    return await Recipe.find().sort({ createdAt: -1 }).limit(amount)
  }
}
