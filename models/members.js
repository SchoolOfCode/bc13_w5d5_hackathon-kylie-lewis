const {query} = require("../db/index");

async function getAllMembers (){
    const result = await query('SELECT * FROM members')
    return result.rows;
}


module.exports = {getAllMembers}
