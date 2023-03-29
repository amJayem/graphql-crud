const Recipe = require('../models/Recipe')
const Products = require('../models/Products')
const Categories = require('../models/Categories')
const Reviews = require('../models/Reviews')

exports.Query = {
  products: (parent, args, context) => {
    const { db } = context
    return db.products
  },
  product: (parent, args, { db }) => {
    const { id } = args
    return db.products.find((product) => product.id === id)
  },

  getAllProducts: async (_, args) => {
    return await Products.find().sort({ createdAt: -1 }).limit(args.amount)
  },

  async recipe(_, { ID }) {
    console.log(ID)
    return await Recipe.findById({ _id: ID })
  },
  async getRecipes(_, { amount }) {
    return await Recipe.find().sort({ createdAt: -1 }).limit(amount)
  }
}
