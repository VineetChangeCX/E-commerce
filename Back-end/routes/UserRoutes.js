const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middlewares/authenticateMiddleware");
router.patch("/auth/deleteuser", auth, userController.deleteuser);
router.post("/login", userController.loginUser);
router.post("/signup", userController.signup);
router.get("/auth/userdetails", auth, userController.userdetails);
module.exports = router;
