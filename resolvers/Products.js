exports.Products = {
  // get the reviews of a product when a product is find out by id
  reviews: (parent, args, context) => {
    console.log("it is calling");
    const id = parent.id;
    return context.db.reviews.filter((review) => review.productId === id);
  },
};
