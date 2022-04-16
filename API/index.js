const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const configs = require("./config");
const {
  commentsRouter,
  userRouter,
  horairesRouter,
  restaurantRouter,
  ingredientsRouter,
  repasRouter,
} = require("./src/routes");
// const horairesRouter = require("./src/routes/horaires.router.js");

mongoose.connect(
  configs.MONGO.uri,
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
app.use("/comments", commentsRouter);
app.use("/restaurants", restaurantRouter);
app.use("/ingredients", ingredientsRouter);
app.use("/repas", repasRouter);

app.listen(configs.PORT, () => {
  console.log("Backend server is running! on port :", configs.PORT);
});
