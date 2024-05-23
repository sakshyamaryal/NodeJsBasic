const express = require("express");
const router =  express.Router();

// const {currentInformation} = require("../controllers/userController");
const {registerUser, currentUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");

router.post("/register",registerUser);

router.post("/login", loginUser);

// @accss Private
router.get("/current", currentUser);

module.exports = router;