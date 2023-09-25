const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db connection
const dbConfig = require("./config/dbConfig");

//Routes
app.get("/", (req, res) => {
  res.send({ message: "home details" });
});

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
