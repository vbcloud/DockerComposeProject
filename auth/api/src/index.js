const express = require("express");
const { port, host, db } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();

app.get("/test", (req, res) => {
  res.send("Our auth server is working correctly");
});

const startServer = () => {
  app.listen(port, async () => {
    console.log(`Started auth service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Database url ${db}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
