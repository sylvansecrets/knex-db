
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('milestones', function(table){
    table.integer('famous_person_id').unsigned()
    table.foreign('famous_person_id').references('famous_people.id')
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
    table.date('date_achieved')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('milestones', function(table){
    table.dropColumn('famous_person_id')
    table.dropColumn('date_achieved')
    table.timestamps();
  })

};
