
const {query} = require('../db/index.js') 

async function getAll() {
    const result = await query('SELECT * FROM films')
    return result.rows
}

async function getFilmsById(id) {
    const result = await query(`SELECT * FROM films WHERE id = ${id}`)
    return result.rows;
}

async function getFilmsByTitle(searchTerm) {
    const result = await query(`SELECT * FROM films WHERE title = '${searchTerm}'`)
    console.log(result)
    return result.rows
}

async function createFilms(newFilm) {
    const result = await query(
    `INSERT INTO films (title)
     VALUES ('${newFilm.title}')
     RETURNING *
    `)
    return result.rows[0]
}
module.exports = {
    getAll,
    getFilmsById,
    getFilmsByTitle,
    createFilms
}