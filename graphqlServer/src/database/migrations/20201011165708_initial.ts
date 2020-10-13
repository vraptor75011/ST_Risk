import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTableIfNotExists('users',(table:Knex.CreateTableBuilder)=>{
        table.increments('UserId');
        table.string('FullName',36);
        table.integer('CountryCode');
        table.timestamps(true,true);

    })
    .createTableIfNotExists('pets',(table:Knex.CreateTableBuilder)=>{
        table.increments('PetId');
        table.string('Name');
        table.integer('OwnerId').references("users.UserId").onDelete("CASCADE");
        table.string('Specie');
        table.timestamps(true,true);
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('users')
        .dropTableIfExists('pets');
}

