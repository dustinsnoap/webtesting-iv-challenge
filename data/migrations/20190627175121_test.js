exports.up = (knex) =>
    knex.schema.createTable('testing', tbl => {
        tbl.increments()
        tbl.string('benson')
            .notNullable()
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('testing')
