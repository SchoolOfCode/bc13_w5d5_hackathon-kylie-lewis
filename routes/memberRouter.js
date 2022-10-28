const {query} = require("../db/index.js")

const express = require("express");
const router = express.Router();

//const {} MODELS

router.get('/', async function (req,res){
    console.log("getall")
    res.send("Get all")
})

module.exports = router;