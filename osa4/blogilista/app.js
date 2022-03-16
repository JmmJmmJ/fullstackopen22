const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const blogsRouter = require("./controllers/blogs");
const morgan = require("morgan");

app.use(morgan("tiny"));

mongoose.connect(config.MONGODB_URI).then((result) => {
  console.log("connected to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogsRouter);

module.exports = app;
