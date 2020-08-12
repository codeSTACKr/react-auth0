const mongoose = require("mongoose");
const { schema } = require("./info.model");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category1: {
    type: String,
    required: true,
  },
  category2: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;