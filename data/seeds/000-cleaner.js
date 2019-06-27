
exports.seed = function(knex) {
  return knex('testing')
    .truncate() //removes all existing entries and resets ids
    .then(function () {
      // Inserts seed entries
      return knex('testing').insert([
        {id: 1, benson: 'value1'},
        {id: 2, benson: 'value2'},
        {id: 3, benson: 'value3'}
      ]);
    });
}