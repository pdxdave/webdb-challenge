
exports.up = function(knex, Promise) {
    return knex.schema 
    .createTable('actions', function(actions) {
        actions.increments()

        actions
            .string('task', 128)
            .notNullable();

        actions
            .string('notes', 128)
            .notNullable();
        
        actions
            .boolean('completed')
            .defaultTo(false);

        actions
            .integer('project_id')  // fk table
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema 
      .dropTableIfExists('actions');
};
