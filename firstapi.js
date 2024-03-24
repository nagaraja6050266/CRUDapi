const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Product=require('./models/product.model.js');
const productRoute=require('./routes/product.route.js');


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.use('/api/products',productRoute);


mongoose.connect("mongodb://localhost:27017")
.then(() => {
    console.log("Connected to DB");
})
.catch(() => {
    console.log("Not Connected ");
})

app.listen(3001,() => {
    console.log("Server is running in 3001");
});

app.get('/',(req,res)=>{
    res.send("Welcome to the simple CRUD API");
})

//Read Every producs

//Read Particular Product using id


//Update a product


//Deleting a product