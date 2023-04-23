const express = require("express");
const {createBook , getBook} = require("../controllers/bookController");
const router = express.Router();

router.post("/new", createBook)

router.get("/books" , getBook)

module.exports = router