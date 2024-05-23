const express = require("express");
const router =  express.Router();

// const {currentInformation} = require("../controllers/userController");
const {registerUser, currentUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/register",registerUser);

router.post("/login", loginUser);

// @access Private
router.get("/current",validateToken, currentUser);

module.exports = router;