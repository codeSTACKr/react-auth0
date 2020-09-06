const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    sku: String,
    quantity:Number,
    name: String,
    nameTranslated: {
      en: String,
      es: String
    },
    price:Number,
    compareToPrice:Number,
    isShippingRequired:Boolean,
    categoryIds: [
      Array
    ],
    weight:Number,
    enabled:Boolean,
    description: String,
    productClassId: Number,
    created:Date,
    fixedShippingRateOnly:Boolean,
    fixedShippingRate:Number,
    tax: {
      enabledManualTaxes: [
        String
      ]
    },  
    options: [
      {
        type: String,
        name:String,
        nameTranslated: {
          en: String,
          es: String
        },
        choices: [
          {
            text:String,
            textTranslated: {
              en: String,
              es:String
            },
            priceModifier:Number,
            priceModifierType: Number
          },
          {
            text: String,
            textTranslated: {
              en: String,
              es:String
            },
            priceModifier: Number,
            priceModifierType:String
          }
        ],
          defaultChoice:Number,
          required: Boolean
      }
    ],
    shipping: {
      type: String,
      methodMarkup:Number,
      flatRate: Number,
      disabledMethods: [
        Array
      ],
      nabledMethods: [Array]
    }
  }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;