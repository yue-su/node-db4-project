const db = require("../data/dbconfig")

const getRecipes = () => {
  return db("recipes")
}

const getInstructions = (recipe_id) => {
  return db("recipes")
    .join("instructions", "recipes.id", "instructions.recipe_id")
    .select("recipes.id", "recipes.recipe_name", "instructions.step_number", "instructions.instruction")
    .where("recipes.id", recipe_id)
}

module.exports = {
  getRecipes,
  getInstructions,
}
