// Require express 
// save the router object from express
// create the default endpoint to return all films
// test in postman to check the connection works..
// before continuing to create the rest of the custom endpoints
 
// Import the models

const express = require('express');
const router = express.Router();

//GET ALL FILMS
//GET FILMS BY TITLE
router.get('/', async (req, res) => {
    if (req.query.title){
        console.log(req.query.title);
        res.send(req.query.title);
    }
    else{
        console.log("hello Kylie, jeremy and lewis");
        res.send("hello");
    }
   
})

//GET FILMS BY ID
router.get('/:id', async (req, res) => {
    console.log("id")
    res.send(req.params.id)
})



module.exports = router;

