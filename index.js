const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



mongoose.connect('mongodb+srv://feliand1997:xfIKOiZl7dM0Je3q@553.sfi0x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=553')
.then(() => {
  console.log("Connected to database!");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})
.catch(() => {
  console.log("Connection failed!");
})