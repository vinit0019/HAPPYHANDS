const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Data = require("./Models/Authmodels");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Collection = require("./Models/Collectionmodels");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/allUsersPra");

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Please fill all fields!" });
  }

  let exist = await Data.findOne({ email });
  if (exist) {
    return res.json({ message: "Email already registered!" });
  }
  let hasdpassword = await bcrypt.hash(password, 10);

  await Data.create({ name, email, password: hasdpassword });
  res.json({ message: "User Created Successfully!" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let superAdminEmail = "superadmin@gmail.com";
  let superAdminPassword = "Superadmin";

  if (!email || !password) {
    res.json({ message: "Please fill all fields!" });
  }

  if (email === superAdminEmail && password === superAdminPassword) {
    let SuperToken = await jwt.sign({ id: 1 }, "3@pm", { expiresIn: "1h" });
    return res.json({ message: "SuperAdmin Log-in...!", SuperToken });
  }

  const exist = await Data.findOne({ email });
  if (!exist) {
    res.json({ message: "User not Found !" });
  }

  const user = await bcrypt.compare(password, exist.password);

  if (!user) {
    res.json({ message: "Password Incorected !" });
  }
  const token = await jwt.sign({ id: user._id }, "3@pm", { expiresIn: "1h" });

  if (exist.role === "admin") {
    res.json({
      message: "Admin Log-in!",
      token,
      name: exist.name,
      role: exist.role,
    });
  } else
    res.json({
      message: "User Log-in!",
      token,
      name: exist.name,
      role: exist.role,
    });
});

let saveotp;

app.post("/forgot", async (req, res) => {
  const { forgotEmail } = req.body;

  let exist = await Data.findOne({ email: forgotEmail });
  if (!exist) {
    res.json({ message: "User not Found !" });
  }

  const generateOtp = Math.floor(100000 + Math.random() * 900000);
  saveotp = generateOtp;

  const transpoter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "krishnarughani101@gmail.com",
      pass: "zthqzjzwqyqmwgbj",
    },
  });
  const mail = {
    from: "krishnarughani101@gmail.com",
    to: "marthakvinit5@gmail.com",
    subject: "your reset password otp",
    text: `your otp is ${generateOtp}`,
  };

  exist.otp = generateOtp;
  await exist.save();
  await transpoter.sendMail(mail);
  res.json({ message: "OTP sent successfully!", forgotEmail });
});

app.post("/fileotp", async (req, res) => {
  const { otp } = req.body;

  if (parseInt(otp) === saveotp) {
    res.json({ message: "OTP verified successfully!" });
  } else {
    res.json({ message: "Invalid OTP. Try again!" });
  }
});

app.post("/cheakpass", async (req, res) => {
  const { getemail, confirmPass1 } = req.body;

  if (!confirmPass1) {
    return res.json({ message: "Please fill all fields!" });
  }

  const exist = await Data.findOne({ email: getemail });
  console.log(exist);
  if (!exist) {
    return res.json({ message: "User not found!" });
  }
  const hashedPassword = await bcrypt.hash(confirmPass1, 10);
  exist.password = hashedPassword;
  await exist.save();

  res.json({ message: "Password updated successfully!" });
});

app.get("/superadmin", async (req, res) => {
  let allUsers = await Data.find();
  res.json({ message: "all User..!", data: allUsers });
});

app.post("/updateRole", async (req, res) => {
  const { id, role } = req.body;

  const updatedUser = await Data.findOne({ _id: id });

  updatedUser.role = role;
  await updatedUser.save();

  res.json({
    message: `Role updated to ${role} successfully!`,
    data: updatedUser,
  });
});

app.post("/deleteUser", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ message: "Email missing!" });
  }

  const del = await Data.findOneAndDelete({ email });

  if (!del) {
    return res.json({ message: "user not found!" });
  }

  res.json({ message: "User deleted successfully!" });
});

app.get("/admin", async (req, res) => {
  let allUsers = await Data.find();

  return res.json({ message: "all user...!", data: allUsers });
});

app.get("/getcollection", async (req, res) => {
  const newCollection = await Collection.find();
  return res.json({
    message: "All Collection is here...",
    data: newCollection,
  });
});

app.post("/submitcollection", async (req, res) => {
  const { cartName, cartDetails, cartPrice, imageurl } = req.body;

  
  let newD = await Collection.create({
    cartName,
    cartDetails,
    cartPrice,
    cartimg: imageurl,
  });
  newD.save();

  return res.json({ message: "New Collection Created...!" });
});

app.post("/deletecart", async (req, res) => {
  const { id } = req.body;

  let allCarts = await Collection.findOneAndDelete({ _id: id });

  if (!allCarts) {
    return res.json({ message: "User Not Found...!" });
  }

  return res.json({ message: "Cart deleted successfully!" });
});

// app.listen(8080, () => {
//   console.log("server is running...");
// });
