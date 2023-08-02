// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Billing service is live");
});

// ! INVENTORY CRUD OPERATIONS
app.get("/billing", (req, res) => {
  res.send("Fetch Billing");
});

app.post("/billing", (req, res) => {
  console.log("==============Billing=============",req.body);
  res.send("Create Billing");
});

app.put("/billing", (req, res) => {
  res.send("Billing Update");
});

app.delete("/billing", (req, res) => {
  res.send("Billing Delete");
});

app.listen(5001, () => {
  console.log('server started on port 5001');
});

