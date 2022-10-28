// Require express 
// save the router object from express
// create the default endpoint to return all films
// test in postman to check the connection works..
// before continuing to create the rest of the custom endpoints
 
// Import the models

const express = require('express');
const router = express.Router();

//GET ALL FILMS
router.get('/', async (req, res) => {
    console.log("hello Kylie, jeremy and lewis");
    res.send("hello");
})

//GET FILMS BY ID
router.get('/:id', async (req, res) => {
    console.log("id")
    res.send(req.params.id)
})

module.exports = router;

// router.get("/", async function (req, res) {
//     if (req.query.name !== undefined) {
//       const searchedAuthors = await searchAuthorByName(req.query.name);
//       return res.json({ success: true, payload: searchedAuthors });
//     }