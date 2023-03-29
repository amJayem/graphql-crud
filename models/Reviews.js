const { model, Schema } = require('mongoose')
const reviewsSchema = new Schema({
  comment: String,
  date: String,
  productId: String,
  rating: Number,
  title: String
})

module.exports = model('Reviews', reviewsSchema)
