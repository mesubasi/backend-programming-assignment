// queryController.js

const path = require("path");
const fs = require("fs").promises;

const handleQuery = async (req, res) => {
  // HTTP Method : Get - API Endpoint : /queries/count/2015 - Response Time : 1350 ms
  try {
    const { dateprefix } = req.params;

    // Path where the file is located
    const logFile = path.join(__dirname, "..", "middleware", "hn_logs.tsv");

    // File reading and character format
    const data = await fs.readFile(logFile, "utf-8");

    //
    const dataLines = data.split("\n");

    const dataTab = dataLines
      .map((line) => line.split("\t"))
      .filter((dataLine) => dataLine[0].startsWith(dateprefix));

    const date = dataTab.map((item) => item[0]);
    const dateLength = date.length;

    // 200 returns the number of data with dynamic parameter in JSON format with status code
    res.status(200).json({ count: dateLength });
  } catch (err) {
    res.status(500).json({ error: "Error", details: err.message });
  }
};

module.exports = { handleQuery };
