module.exports = {
  Query: {
    getProducts: async (_, args, { Product }) => {
      const products = await Product.find({}).sort({ addedDate: "desc" });

      return products;
    }
  },
  Mutation: {
    signUpUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already Exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    },

    addProduct: async (
      _,
      {
        title,
        modelNo,
        category,
        image,
        features,
        dppPrice,
        mrpPrice,
        resellerPrice
      },
      { Product }
    ) => {
      const newProduct = await new Product({
        title,
        modelNo,
        category,
        image,
        features,
        dppPrice,
        resellerPrice,
        mrpPrice
      }).save();
      return newProduct;
    }
  }
};
