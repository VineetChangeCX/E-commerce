const Users = require("../models/user");
const mongoose = require("mongoose");

const addcart = async (req, res) => {
  const { product, quantity } = req.body;
  const userID = req.user;
  try {
    const isUser = await Users.findById(userID);
    if (!isUser) {
      return res.status(404).json({ message: "User not Found." });
    }
    isUser.cart.push({ ...req.body });
    await isUser.save();

    res.status(200).json({ message: "Item added successfully in cart" });
  } catch (error) {
    console.error("Error while adding product to cart:", error);
    res.status(500).json({ message: "Error while adding product to cart." });
  }
};

const removecart = async (req, res) => {
  const productID = new mongoose.Types.ObjectId(req.params.id);
  const userID = req.user;

  if (!userID) {
    return res
      .status(401)
      .json({ message: "Unauthorized: User not logged in." });
  }

  try {
    const isUser = await Users.findById(userID);
    if (!isUser) {
      return res.status(404).json({ message: "User not Found." });
    }

    isUser.cart = isUser.cart.filter(
      (item) => item.product.toString() !== productID.toString()
    );
    await isUser.save();

    res.status(200).json({
      cart: isUser.cart,
      message: "Item removed successfully from cart",
    });
  } catch (error) {
    console.error("Error while removing product from cart:", error);
    res
      .status(500)
      .json({ message: "Error while removing product from cart." });
  }
};

const showcart = async (req, res) => {
  const userID = req.user;
  try {
    const isUser = await Users.findById(userID);
    if (!isUser) {
      return res.status(404).json({ message: "User not Found." });
    }
    return res.json(isUser.cart);
  } catch (error) {
    console.error("Error occured while showing cart Items:", error);
    res.status(500).json({ message: "Error occurred while showing cart." });
  }
};

module.exports = {
  addcart,
  removecart,
  showcart,
};
