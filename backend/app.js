const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use((req, res, next) => {
  // for cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

// app.use((req, res, next) => {
//   // you will see this on the browser locallhost:8000
//   res.send("Hello from express :)");
//   next();
// });

app.use("/api/post", (req, res, next) => {
  const posts = [
    {
      id: "randomId1",
      title: "server-side post1",
      content: "this is from the server1-1",
    },
    {
      id: "randomId2",
      title: "server-side post2",
      content: "this is from the server1-2",
    },
  ];
  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts,
  });
});

// app.use(express.json());
// app.use(cors());

// below is the same as like this syntax
// export default app;
module.exports = app;
