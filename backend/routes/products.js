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
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newProducts = new Products({
    username,
    description,
    date,
  });

  newProducts
    .save()
    .then(() => {
      res.json("Product Added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// implement crud functions
//  read
router.route("/:id").get((req, res) => {
  Products.findById(req.params.id)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
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
      products.username = req.body.username;
      products.description = req.body.description;
      products.date = Date.parse(req.body.date);

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