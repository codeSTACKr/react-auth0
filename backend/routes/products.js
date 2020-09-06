const router = require("express").Router();
let Products = require("../models/products.model");

router.route("/").get((req, res) => {
  Products.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const sku = req.body.sku;
  const quantity = req.body.quantity;
  const nameTranslated = req.body.nameTranslated;
  const price = req.body.price;
  const compareToPrice = req.body.compareToPrice;
  const isShippingRequired = req.body.isShippingRequired;
  const categoryIds = req.body.categoryIds;
  const weight = req.body.weight;
  const enabled = req.body.enabled;
  const description = req.body.description;
  const productClassId = req.body.productClassId;
  const created = req.body.created;
  const fixedShippingRateOnly = req.body.fixedShippingRateOnly;
  const fixedShippingRate = req.body.fixedShippingRate;
  const brand = req.body.brand;
  const tax = req.body.tax;
  const optionsType = req.body.optionsType;
  const shipping = req.body.shipping;

  const newProducts = new Products({
    name,
    sku,
    quantity,
    nameTranslated,
    price,
    brand,
    compareToPrice,
    isShippingRequired,
    categoryIds,
    weight,
    enabled,
    description,
    productClassId,
    created,
    fixedShippingRateOnly,
    fixedShippingRate,
    tax,
    optionsType,
    shipping
  });

  newProducts.save()
    .then(() => res.json("Product Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// implement crud functions
//  read
router.route("/:id").get((req, res) => {
  Products.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error: " + err));
});

// delete record by id
router.route("/:id").delete((req, res) => {
  Products.findById(req.params.id)
    .then(() => {
      res.json("Product Deleted");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// update
router.route("/update/:id").post((req, res) => {
  Products.findById(req.params.id)
    .then((products) => {
      products.name = req.body.name;
     // products.description = req.body.description;
      //products.date = Date.parse(req.body.date);

      products
        .save()
        .then(() => {
          res.json("Product added");
        })
        .catch((err) => {
          res.status(400).json("Error: " + err);
        });
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;