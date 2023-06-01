const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");

const app = express();

// mongoose.set("serverSelectionTimeoutMS", 5000);

mongoose.connect("mongodb://127.0.0.1:27017/walmart2", () => {
  console.log("connected to MongoDB");
});

app.use(express.json());
// app.use(express.static(''))
app.use(cors());

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

app.get("*", (req, res) => {
  res.json({ message: "page not found" });
});

app.use((err, req, res, next) => {
  res.json({ message: "server error!" });
});

app.listen(3000, () => {
  console.log("server listenig...");
});
