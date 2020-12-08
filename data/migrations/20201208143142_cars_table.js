
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // id
    table.increments();
    // VIN
    table.text('VIN', 17).unique().notNullable();
    // make
    table.text('make', 128).notNullable();
    // model
    table.text('model', 128).notNullable();
    // mileage
    table.decimal('mileage');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
