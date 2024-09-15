// queryController.js

const path = require("path");
const fs = require("fs").promises;

const handleQuery = async (req, res) => {
  // HTTP Method : Get - API Endpoint : /queries/count/2015 - Response Time : 1350 ms
  try {
    // Capture values sent as dynamic parameters
    const { dateprefix } = req.params;

    // Path where the file is located
    const logFile = path.join(__dirname, "..", "middleware", "hn_logs.tsv");

    // File reading and character format
    const data = await fs.readFile(logFile, "utf-8");

    // Make a new array by separating the expression at \n
    const dataLines = data.split("\n");

    // Map each element in the array to a new array, separating it from \t
    const dataTab = dataLines
      .map((line) => line.split("\t"))
      // By filtering, take the 0th index corresponding to the date of the element in each array and filter if it starts with the dateprefix given as a dynamic parameter
      .filter((dataLine) => dataLine[0].startsWith(dateprefix));

    // Get the first elements of the dataTab array
    const date = dataTab.map((item) => item[0]);

    // Pass the length of the array created from the dataTab array to the new variable
    const dateLength = date.length;

    // Get the number of dynamically parameterised data in JSON format with 200 status code from the dateLength variable
    res.status(200).json({ count: dateLength });
  } catch (err) {
    res.status(500).json({ error: "Error", details: err.message });
  }
};

module.exports = { handleQuery };
