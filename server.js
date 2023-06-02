const http = require("http");
const debug = require("debug")("node-angular");
const app = require("./backend/app");

// normalizePort function
const normalizePort = (validNum) => {
  const port = parseInt(validNum, 10);

  if (isNaN(port)) {
    return validNum;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

// onError function
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof address === "string" ? "pipe" + address : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated priviledges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// onListening function
const onListening = () => {
  const address = server.address();
  const bind = typeof addr === "string" ? "pipe" + address : "port" + port;
  debug("Listening on" + bind);
};

// port
const port = normalizePort(process.env.PORT || "8000");
app.set("port", port);

// server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => console.log(`Server is running on ${port}`));

// package.json file has scripts - start:server
// terminal command to start the server will be
// from now on $npm run start:server (= nodemon server.js = node server.js)
