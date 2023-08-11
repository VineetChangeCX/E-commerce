const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  orderTotal: {
    type: Number,
    default: 0,
  },
  orderItems: [
    {
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
    },
  ],
  paymentStatus: {
    type: String,
    required: true,
    default: "Unpaid",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
