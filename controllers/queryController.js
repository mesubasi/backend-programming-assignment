// queryController.js

const path = require("path");
const fs = require("fs").promises;

const handleQuery = async (req, res) => {
  try {
    const { dateprefix } = req.params;
    const logFile = path.join(__dirname, "..", "middleware", "hn_logs.tsv");
    const data = await fs.readFile(logFile, "utf-8");
    const dataLines = data.split("\n");

    const dataTab = dataLines
      .map((line) => line.split("\t"))
      .filter((dataLine) => dataLine[0].startsWith(dateprefix));

    const date = dataTab.map((item) => item[0]);
    const dateLength = date.length;

    res.status(200).json({ count: dateLength });
  } catch (err) {
    res.status(500).json({ error: "Error", details: err.message });
  }
};

module.exports = { handleQuery };
