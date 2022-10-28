const {query} = require("../db/index.js")

const express = require("express");
const router = express.Router();

//const {} MODELS

router.get('/', async function (req,res){
    if(req.query.first_name){
        console.log(req.query.first_name)
        res.send(req.query.first_name)
    }
    else{
        console.log("getall")
        res.send("Get all")
    }
   
})

router.get('/:id', async function (req, res) {
    console.log(req.params.id)
    res.send(req.params.id)
})

//ADD NEW MEMBER
router.post('/', async function (req,res){
    console.log(req.body)
    res.send(req.body)
})

router.patch('/:id', async function(req, res) {
    console.log(req.params.id)
    // res.send(req.params.id)
    res.send(req.body)
})
module.exports = router;