
//Para criar uma nova migration - npx knex migrate:make create_migrationName

//Para utilizar a migration - npx knex migrate:latest

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //Chave estrangeira

        table.foreign('ong_id').references('id').inTable('ongs');//Chave estrangeira referente a...

    })
};

//Caso aconteça alguma coisa errada - npx knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
