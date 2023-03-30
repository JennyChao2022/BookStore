const express= require("express");
const mongoose= require("mongoose");
const router = require("./routes/book-routes");
const cors =require('cors');
const app= express();

//Middlewares (router)
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose
    .connect(
    "mongodb+srv://admin:xJ7BiBDdNON7ySei@cluster0.rgopiri.mongodb.net/BOOKSTORE?retryWrites=true&w=majority"
)
    .then(()=> console.log("Connected to Database"))
    .then(()=> {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
//mongodb+srv://admin:<password>@cluster0.rgopiri.mongodb.net/?retryWrites=true&w=majority

//xJ7BiBDdNON7ySei 





