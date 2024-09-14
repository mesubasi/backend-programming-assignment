// queryController.js

const path = require("path");
const fs = require("fs").promises;

const handleQuery = async (req, res) => {
  try {
    const logFile = path.join(__dirname, "..", "middleware", "hn_logs.tsv");
    const logData = await fs.readFile(logFile, "utf-8");
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Error" });
  }
};

module.exports = { handleQuery };
