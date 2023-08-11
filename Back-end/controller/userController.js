const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.SECRET_KEY;

const deleteuser = async (req, res) => {
  const userID = req.user;
  try {
    const isUser = await Users.findById(userID);
    if (!isUser) {
      return res.status(404).json({ message: "User not found." });
    }
    isUser.isDeleted = true;
    await isUser.save();

    res.json({ message: ":User deleted successfully." });
  } catch (error) {
    console.log("Error occured while deleting user:", error);
    res.status(500).json({ message: "Error occured while deleting user." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User Not Found.Kindly signup first." });
    }

    if (user.isDeleted) {
      return res
        .status(403)
        .json({ error: "This account has been deleted. Contact the admin." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: user._id,
        role: user.role,
      },
      secret
    );
    res.json({ message: "Successfully LoginUser", token, role: user.role });
  } catch (error) {
    console.error("error during login:", error);
    res.status(500).json({ message: "An error occured during login." });
  }
};

const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email id already exist..." });
    }
    const Round = 10;
    const hashedPassword = await bcrypt.hash(password, Round);
    const newUser = new Users({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "Account created successfully." });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Error during signup." });
  }
};

const userdetails = async (req, res) => {
  try {
    const userID = req.user;
    const isUser = await Users.findById(userID).select("-password");
    if (!isUser) {
      return res.json("User not available.");
    }
    res.json(isUser);
  } catch (error) {
    console.error("Error occurred while fetching details of user:", error);
    res.status(500).json("Error occurred while fetching details of user.");
  }
};

module.exports = {
  deleteuser,
  loginUser,
  signup,
  userdetails,
};
