
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
    table.decimal('mileage').notNullable();
    // transmission type
    table.text('transmissionType', 128);
    // titleStatus
    table.text('titleStatus', 128);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
