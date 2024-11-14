const express = require("express");
const app = express();
const port = 8000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/TradeNepalDB");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  fullName: String,
  phoneNumber: Number,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);
app.use(express.json());

app.post("/register", (req, res) => {
  User.create(req.body);
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(["Ram", "Hari", "Gopal", "Shyam"]);
});

app.get("/products", (req, res) => {
  res.send(["Apple Watch", "Denim Jeans", "Gold Star Shoes"]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
