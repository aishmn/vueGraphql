const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  modelNo: { type: String, required: true, trim: true },
  features: { type: String, required: true },
  category: { type: String, required: true },
  addedDate: { type: Date, default: Date.now },
  dppPrice: {
    type: Number,
    required: true
  },
  mrpPrice: {
    type: Number,
    required: true
  },
  resellerPrice: {
    type: Number,
    required: true
  },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Product", ProductSchema);
