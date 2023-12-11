const express = require("express");
const cors = require("cors");
const {connection} = require("./configs/db");
const port = process.env.PORT || 3232;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, async function () {
  connection.connect((err)=>{
    if(err){
      throw err
    }
    console.log("Connected to database");
  });
});
