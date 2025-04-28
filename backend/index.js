const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db.js");

const cookieParser = require('cookie-parser');
const blogRoutes = require("./routes/blog.routes.js");

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/posts', blogRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is running on ${process.env.PORT}`);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }                 
});