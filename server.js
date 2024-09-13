// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// routes
const queryRoute = require("./routes/query");

//middlewares
app.use(express.json());
app.use("/queries/count", queryRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
