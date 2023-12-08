const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./configs/db");
const port = process.env.PORT || 3232;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
