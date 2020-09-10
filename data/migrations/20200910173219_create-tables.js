
exports.up = function (knex) {
    
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe_name', 128)
            .notNullable()
        })
        .createTable('instructions', tbl => {
            tbl.increments()
            tbl.string('instruction', 128).notNullable()
            tbl.integer('step_number').notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
            .inTable('recipes')
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name', 128).notNullable()
        })
        .createTable('recipe_detail', tbl => {
            tbl.increments()
            tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
            tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients')
            tbl.integer('quantity').notNullable()
        })
    
  
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("receip_ingredient")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("instructions")
      .dropTableIfExists("recipes")
};
