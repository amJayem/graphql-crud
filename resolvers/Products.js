const Reviews = require('../models/Reviews')

exports.Products = {
  // get the reviews of a product when a product is find out by id
  reviews: async (parent, args, context) => {
    const id = parent.id
    // return context.db.reviews.filter((review) => review.productId === id)
    const reviews = await Reviews.find()
    // console.log(reviews)
    return reviews.filter((review) => review.productId === id)
  }
}
