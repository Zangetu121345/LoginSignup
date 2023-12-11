const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
// const {createRoles,createAdmin} = require("./intialSetup/initial");


const port = 8080;
const app = express();


app.use(cors());
app.use(express.json());

app.listen(port, async function () {
  db.sequelize.sync();
 
});

authRoutes(app);
userRoutes(app);