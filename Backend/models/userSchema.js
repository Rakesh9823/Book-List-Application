const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const userSchema = new mongoose.Schema({
    username:{type:String , required:true},
    password:{type:String , required:true},
    confirmPassword:{type:String , required:true}
} , {timestamps:true});

module.exports = {User : mongoose.model("UserDetails" , userSchema)}