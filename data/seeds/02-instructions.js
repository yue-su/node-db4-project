
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instruction: 'Put all ingredients together', step_number: 1, recipe_id: 1},
        {id: 2, instruction: 'stir 15 miniutes', step_number: 2, recipe_id: 1},
        {id: 3, instruction: 'bake', step_number: 3, recipe_id: 1},
      
      ]);
    });
};
