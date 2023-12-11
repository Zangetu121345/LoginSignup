const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3232;
const db = require("./models");

console.log(db.role);
const app = express();


app.use(cors());
app.use(express.json());

app.listen(port, async function () {
  db.sequelize.sync();
});
