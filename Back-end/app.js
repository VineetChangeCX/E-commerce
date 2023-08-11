const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CartRoutes = require("./routes/CartRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");
app.use("/api/user", userRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/product", ProductRoutes);

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Server is OK" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

module.exports = app;
