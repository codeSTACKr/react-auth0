const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// set up connection to database
const uri =
  process.env.ATLAS_URI; /** this is a environment variable declared in .env */
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established successfully");
});

app.use(cors());
app.use(express.json());

//  setting up routes
const infoRouter = require("./routes/info");
const userRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use("/info", infoRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
