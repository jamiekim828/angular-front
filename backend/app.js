const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use((req, res, next) => {
  // you will see this in the terminal console
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  // you will see this on the browser locallhost:8000
  res.send("Hello from express :)");
  next();
});

// app.use(express.json());
// app.use(cors());

// below is the same as like this syntax
// export default app;
module.exports = app;
