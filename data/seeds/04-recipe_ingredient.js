
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("receip_ingredient")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("receip_ingredient").insert([
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 3 },
        { recipe_id: 2, ingredient_id: 3 },
        { recipe_id: 2, ingredient_id: 4 },
        { recipe_id: 3, ingredient_id: 2 },
        { recipe_id: 3, ingredient_id: 1 },
      ])
    })
};
