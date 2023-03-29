const { model, Schema } = require('mongoose')

const productsSchema = new Schema({
  name: String,
  description: String,
  categoryId: Number,
  image: String,
  onSale: Boolean,
  price: Number,
  quantity: Number
})

module.exports = model('products', productsSchema)
