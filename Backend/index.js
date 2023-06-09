const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json())
app.use(cors())


app.use("/book" , bookRoutes);
app.use("/user" , userRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/book" , {useNewUrlParser:true, useUnifiedTopology:true})
.then(() =>{
    console.log("Connected");
})
app.listen(8000 , () =>{
    console.log("Server is up at port 8000")
})