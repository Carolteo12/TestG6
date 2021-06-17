const mysql_pkg = require("mysql");

var properties = {
  host: "34.126.172.116",
  user: "root",
  password: "fintechsglab",
  port: 3306,
  database: "b10_g6",
};

var connection = mysql_pkg.createConnection(properties);

// it takes a callback and passes the error into the callback if the connection failed.
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MySQL successfully!");
  }
});

module.exports = { connection };
