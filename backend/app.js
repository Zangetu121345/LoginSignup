const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./models");
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
// const {createRoles,createAdmin} = require("./intialSetup/initial");


const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for managing sessions (using cookies)
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET_KEY], // Change this to a secure secret key
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  secure: false, // Set to true in a production environment with HTTPS
  httpOnly: true,
}));
app.use(cors());
// app.use(express.json());

app.listen(port, async function () {
  db.sequelize.sync();
 
});

authRoutes(app);
userRoutes(app);