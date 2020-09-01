const mongoose = require("mongoose");
const { schema } = require("./info.model");
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
  isShippingRequired: String,
  categoryIds: [Number],
  weight: Number,
  enabled: Boolean,
  description: String,
  productClassId: Number,
  created: String,
  fixedShippingRateOnly: Boolean,
  fixedShippingRate: Number,
  tax: {
    enabledManualTaxes: [
      Number
    ]
  },
  Options: [
    {
      type: String,
      name: String,
      nameTranslated: {
        en: String,
        es: String
      },
      choices: [
        {
          text: String,
          textTranslated: {
            en: String,
            es: String
          },
          priceModifier: Number,
          priceModifierType: String
        }, 
      ],
      defaultChoice: Number,
      required: Boolean
    }
  ],
  shipping: {
    type: String,
    methodMarkup: Number,
    flatRate: Number,
    disabledMethods: [
      String
    ],
    enabledMethods: [
      String
    ]
  }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;