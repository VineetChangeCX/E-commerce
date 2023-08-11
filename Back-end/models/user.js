const { ObjectId, Schema } = require("mongoose");
const mongoose = require("mongoose");
const Product = require("./products");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  cart: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
