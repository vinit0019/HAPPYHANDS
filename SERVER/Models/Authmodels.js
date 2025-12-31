const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  otp: Number,
  role: { type: String, default: "user" },
});

const Data = mongoose.model("userpras", Userschema);
module.exports = Data;
