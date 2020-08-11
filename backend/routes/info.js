const router = require("express").Router();
let Information = require("../models/info.model");

router.route("/").get((req, res) => {
  Information.find()
    .then((information) => {
      res.json(information);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newInformation = new Information({
    username,
    description,
    date,
  });

  newInformation
    .save()
    .then(() => {
      res.json("Information Added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// implement crud functions
//  read
router.route("/:id").get((req, res) => {
  Information.findById(req.params.id)
    .then((information) => {
      res.json(information);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// delete record by id
router.route("/:id").delete((req, res) => {
  Information.findById(req.params.id)
    .then(() => {
      res.json("Information Delered");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// update
router.route("/update/:id").post((req, res) => {
  Information.findById(req.params.id)
    .then((information) => {
      information.username = req.body.username;
      information.description = req.body.description;
      information.date = Date.parse(req.body.date);

      information
        .save()
        .then(() => {
          res.json("Information added");
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
