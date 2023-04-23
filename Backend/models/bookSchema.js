const mongoose = require("mongoose")
 const bookSchema =  new mongoose.Schema({
    title:{type:String , required:true},
    ISBN: {type:String , required:true},
    Author:{type:String , required:true},
    Description:{type:String , required:true},
    date:{type:String , required:true},
    Publisher:{type:String , required:true}
 } , {timestamps:true});

 module.exports = mongoose.model("BookList" , bookSchema);