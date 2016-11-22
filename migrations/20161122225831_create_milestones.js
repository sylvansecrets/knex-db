
exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestones', function(table){
    table.increments();
    table.string('description');
    table.timestamps('date_achieved')
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones');

};
