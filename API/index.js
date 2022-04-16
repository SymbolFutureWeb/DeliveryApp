const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { commentsRouter, userRouter } = require("./src/routes");
const horairesRouter = require("./src/routes/horaires.router.js");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL + process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(cors());

// app.use("/comments", commentsRouter);
app.use("/horaires", horairesRouter);
app.use("/users", userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Backend server is running! on port :", process.env.SERVER_PORT);
});
