// queryController.js

const path = require("path");
const fs = require("fs");

const handleQuery = async (req, res) => {
  try {
    const { dateprefix } = req.params;
    const logFile = path.join(__dirname, "..", "middleware", "test.tsv");
    fs.readFile(logFile, "utf-8", (err, data) => {
      if (err) throw err;
      const dataLine = data.split("\n");
      const dataTab = dataLine.map((line) => line.split("\t"));
      res.status(200).json({ dataTab });
    });
  } catch (err) {
    res.status(500).json({ error: "Error", details: err.message });
  }
};

module.exports = { handleQuery };
