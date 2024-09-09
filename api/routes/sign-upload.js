const express = require("express");
const { generateSignature } = require("../controllers/sign-upload.js");

const router = express.Router();

// http://localhost:5000/api/sign-upload
router.post("/sign-upload", generateSignature);

module.exports = router;