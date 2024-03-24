const express = require("express");
const signupUser = require("../controllers/auth").signupUser;
const loginUser = require("../controllers/auth").loginUser;

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
