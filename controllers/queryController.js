// queryController.js
const path = require("path");
const fs = require("fs");

const handleQuery = async (req, res) => {
  try {
    const logFile = path.join(__dirname, "..", "middleware", "hn_logs.tsv");
    console.log(logFile);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handleQuery };
