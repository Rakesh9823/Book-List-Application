const BookList = require("../models/bookSchema");

const createBook = async (req , res) =>{
    try{
        let data = req.body;
        const newbook = await BookList.create(data) 
        res.status(201).json({
            status:"Succesfully added a new book",
            newbook
        })
    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
}


const getBook = async (req , res) =>{
    try{
        const result = await BookList.find()
        res.status(201).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(e).json({
            status:"Failed",
            message:e.message
        })
    }
}

module.exports = {createBook , getBook}