const db = require('../config/db')

module.exports = {
    insert,
    get_all,
    find_by,
}

async function insert(benson) {
    const [id] = await db('testing').insert(benson)
    return find_by({id})
}
function get_all() {
    return db('testing')
}
function find_by(thing) {
    return db('testing').where(thing).first()
}