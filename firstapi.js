require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const path = require("path");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

mongoose
    .connect(process.env.MONGODB_URI,{
        dbName: "Products"
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Not Connected ");
    });

app.listen(3001, () => {
    console.log("Server is running in 3001");
});

app.get("/", (req, res) => {
    res.send("Welcome To Simple CRUD API");
});
