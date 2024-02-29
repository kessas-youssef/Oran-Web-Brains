const mongoose = require("mongoose");
const user = new mongoose.Schema({
  fname: String,
  gname: String,
  age: Number,
  university: String,
  area: String,
  level: String,
  email: String,
  password: String,
  rdv: Date,
  admin: { type: Boolean, default: false },
  admin_level: { type: Number, default: null },
});

module.exports = mongoose.model("User", user, 'users');