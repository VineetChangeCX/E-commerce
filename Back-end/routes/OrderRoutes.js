const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const auth = require("../middlewares/authenticateMiddleware");
router.post("/auth/addorder", auth, orderController.addorder);
router.get("/:orderID", orderController.orderDetID);
router.get("/auth/orderhistory", auth, orderController.orderhistory);

module.exports = router;
