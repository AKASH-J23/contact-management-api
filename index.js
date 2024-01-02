const dotenv = require("dotenv").config();
const express = require("express");
const connectdb = require("./config/dbConnection");

connectdb()
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json())
app.use("/api/contact", require("./Router/router"))

app.listen(port ,()=>console.log(`Server established ${port}`));