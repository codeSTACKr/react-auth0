const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  sku: String,
  quantity: Number,
  name: String,
  nameTranslated: {
    en: String,
    es: String
  },
  price: Number,
  compareToPrice: Number,
  isShippingRequired: Boolean,
  categoryIds: [Number],
  weight: Number,
  enabled: Boolean,
  description: String,
  productClassId: Number,
  created: String,
  fixedShippingRateOnly: Boolean,
  fixedShippingRate: Number,
  brand: String,
  tax: {
    enabledManualTaxes: [
      Number
    ]
  },
  optionsType: String,
     
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;