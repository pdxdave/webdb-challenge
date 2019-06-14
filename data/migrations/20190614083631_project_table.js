
exports.up = function(knex, Promise) {
   return knex.schema 
    .createTable('project', tbl => {
        tbl.increments(); // primary key, auto increment, not null

        tbl
            .string('name', 128)
            .string('description', 128)
            .notNullable()
            .boolean('completed', '0');
    })

    .createTable('action', tbl => {
        tbl.increments()

        tbl
            .string('task', 128)
            .string('notes', 128)
            .notNullable()
            .boolean('completed', '0');

        tbl
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
        .dropTableIfExists('project')
        .dropTableIfExists('action')
};
