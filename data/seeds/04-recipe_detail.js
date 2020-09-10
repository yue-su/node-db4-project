
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_detail').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 50},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: 70},
        {id: 3, recipe_id: 1, ingredient_id: 3, quantity: 80},
        {id: 4, recipe_id: 1, ingredient_id: 4, quantity: 90},
      ]);
    });
};
