const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const fs = require("fs");
const path = require("path");
const User = require("./models/UserModel");
const Product = require("./models/ProductModel");
const Category = require("./models/CategoryModel");

const filePath = path.join(__dirname, "graphql", "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./graphql/resolvers");
console.log(filePath);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: {
    User,
    Product,
    Category
  }
});
server.listen().then(({ url }) => {
  console.log(`Server Running ${url}`);
});
