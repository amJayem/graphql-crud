exports.Query = {
  products: (parent, args, context) => {
    const {db} = context;
    return db.products
  },
  product: (parent, args, {db}) =>{
    const {id} = args;
    return db.products.find(product=> product.id === id)
  }
};
