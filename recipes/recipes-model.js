const db = require("../data/dbconfig")

const getRecipes = () => {
  return db("recipes")
}

const getInstructions = (recipe_id) => {
  return db("recipes")
    .join("instructions", "recipes.id", "instructions.recipe_id")
    .select(
      "recipes.id",
      "recipes.recipe_name",
      "instructions.step_number",
      "instructions.instruction"
    )
    .where("recipes.id", recipe_id)
}

const getShoppingList = (recipe_id) => {
  return db("recipe_detail")
    .join("recipes", "recipes.id", "recipe_detail.recipe_id")
    .join("ingredients", "recipe_detail.ingredient_id", "ingredients.id")
      .select(
        "recipe_detail.id",
      "recipes.recipe_name",
      "ingredients.ingredient_name",
      "recipe_detail.quantity"
    )
    .where("recipes.id", recipe_id)
}

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList,
}
