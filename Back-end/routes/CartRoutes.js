const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");
const auth = require("../middlewares/authenticateMiddleware");
router.patch("/auth/addcart", auth, cartController.addcart);
router.delete("/auth/:id", auth, cartController.removecart);
router.get("/auth/showcart", auth, cartController.showcart);

module.exports = router;
