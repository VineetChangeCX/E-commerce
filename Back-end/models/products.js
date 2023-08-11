const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  variants: [
    {
      size: {
        type: String,
        required: true,
      },
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
