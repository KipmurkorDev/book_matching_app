const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const bookRouter = require("./Routes/bookRouter");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 80;
mongoose.connect(process.env.DB_URL);

app.use("/books", bookRouter);
app.listen(port, () => {
  console.log(`The server is runniong on port: ${port}`);
});
