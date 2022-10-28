
const {query} = require('../db/index.js') 

async function getAll() {
    const result = await query('SELECT * FROM films')
    return result.rows
}



module.exports = {
    getAll
}