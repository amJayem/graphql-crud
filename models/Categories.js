const { model, Schema } = require('mongoose')

const categoriesSchema = new Schema({
  id: Number,
  name: String
})

module.exports = model('categories', categoriesSchema)
