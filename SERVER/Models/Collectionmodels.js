const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  cartName: String,
  cartDetails: String,
  cartPrice: String,
  cartimg : String
});

let collection = mongoose.model("Collection", collectionSchema)
module.exports = collection
