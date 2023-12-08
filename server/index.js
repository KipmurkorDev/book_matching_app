const express = require("express");
require("dotenv").config();
const app = express();

const mongoose = require("mongoose");

const port = process.env.PORT || 80;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(port, () => {
  console.log(`The server is runniong on ${port}`);
});
