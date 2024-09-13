// query.js

const express = require("express");
const router = express.Router();
const queryController = require("../controllers/queryController");

router.get("/:dateprefix", queryController.handleQuery);

module.exports = router;
