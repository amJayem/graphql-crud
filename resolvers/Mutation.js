exports.Mutation = {
  addProduct: (parent, args, context) => {
    console.log(parent, args)
    const product = args.input
    const prod = context.db.products
    const lastId = prod[prod.length - 1].id
    product.id = lastId + 1
    prod.push(product)
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
  }
}
