// query.js

const express = require("express");
const router = express.Router();
const queryController = require("../controllers/queryController");

router.get("/:datePrefix");

module.exports = router;
