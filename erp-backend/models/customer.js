const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  gstin: String,
  address: String,
  balance: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);