const express = require("express");
const cors = require("cors");
const db = require("./models");
const {createRoles,createAdmin} = require("./intialSetup/initial");

const port = process.env.PORT || 3232;
const app = express();
console.log(db);

app.use(cors());
app.use(express.json());

app.listen(port, async function () {
  db.sequelize.sync();
});
