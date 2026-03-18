const Customer = require("../models/customer");

// CREATE
exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};