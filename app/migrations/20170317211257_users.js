// TODO is this table necessary?
exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('name');
    table.boolean('isAdmin');
    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('users')
