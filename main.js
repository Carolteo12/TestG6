const customer = require("./customer");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json()); //taking body of the request that is coming in as text.

app.use(customer.router);

app.listen(3000);
