const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_ROOT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
module.exports = () => {
  return connection;
};

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;

//   //   console.log("The solution is: ", rows[0].solution);
// });

// connection.end();
