const {query} = require("../db/index.js")

const express = require("express");
const router = express.Router();

//const {} MODELS

router.get('/', async function (req,res){
    console.log("getall")
    res.send("Get all")
})

router.get('/:id', async function (req, res) {
    console.log(req.params.id)
    res.send(req.params.id)
})

module.exports = router;