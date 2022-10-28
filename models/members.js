const {query} = require("../db/index");

async function getAllMembers (){
    const result = await query("SELECT * FROM members")
    return result.rows;
}

async function getMembersById(id) {
    const result = await query(`SELECT * FROM members WHERE id=${id} `)
    return result.rows[0]
}


module.exports = {getAllMembers, getMembersById}
