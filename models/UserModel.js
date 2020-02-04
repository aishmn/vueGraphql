const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true },
  mobile: { type: String, required: false },
  password: { type: String, required: true, trim: true },
  joinedDate: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  image: { type: String },
  isDealer: { type: Boolean, default: false },
  isReseller: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
