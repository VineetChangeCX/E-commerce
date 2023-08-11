const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
