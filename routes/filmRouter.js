// Require express 
// save the router object from express
// create the default endpoint to return all films
// test in postman to check the connection works..
// before continuing to create the rest of the custom endpoints
 
// Import the models

const { query } = require('express');
const express = require('express');

const router = express.Router();
const {
    getAll,
    getFilmsById,
    getFilmsByTitle,
    createFilms,
    deleteFilm
} = require('../models/films.js')


//GET ALL FILMS
//GET FILMS BY TITLE
router.get('/', async (req, res) => {
    if (req.query.title){
        const filmTitle = await getFilmsByTitle(req.query.title)
        res.send(filmTitle);
    }
    else{
        const allFilms = await getAll()
        console.log("hello Kylie, jeremy and lewis");
        res.send({success: true, payload: allFilms});
    }
   
})

//GET FILMS BY ID
router.get('/:id', async (req, res) => {
    const getById = await getFilmsById(req.params.id)
    console.log("id")
    res.send({success: true, payload: getById})
})

//Create new film
router.post('/', async (req, res) => {
    //console.log(req.body)
    const getFilms = await createFilms(req.body)
    console.log(getFilms)
    res.send(getFilms)
})
//EDIT FILM BY ID
router.patch('/:id', async (req, res) => {
    console.log("hello")
    res.send(req.body)
})

//DELETE FILM BY ID
router.delete('/:id', async (req, res) => {
    const deletedFilm = await deleteFilm(req.params.id)
    console.log(req.params.id)
    res.send({success: true, payload: deletedFilm})
})

module.exports = router;

