const {query} = require("../db/index.js")

const express = require("express");
const router = express.Router();

const {getAllMembers} = require("../models/members.js")

router.get('/', async function (req,res){
    if(req.query.first_name){
        console.log(req.query.first_name)
        res.send(req.query.first_name)
    }
    else{
        const result = await getAllMembers()
        res.send(result)
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

router.delete('/:id', async function(req, res) {
    console.log(req.params.id)
    res.send(req.params.id)
})
module.exports = router;