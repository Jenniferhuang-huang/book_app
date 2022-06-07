const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: Number,
  bookname: String,
  author: String,
});

module.exports = mongoose.model("Book", BookSchema);