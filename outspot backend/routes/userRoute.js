const express = require("express");
const router = new express.Router();

const { userGuard } = require("../auth/auth");

const {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  getAllUser,
} = require("../controller/userController");

// Get User:
router.get("/me", userGuard, getUser);

router.get("/", getAllUser);

// Customer register:
router.post("/register", registerUser);

// customer login:
router.post("/login", loginUser);

// Update user
router.route("/update").put(userGuard, updateUser);

module.exports = router;
