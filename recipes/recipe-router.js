const express = require("express")

const recipes = require("./recipes-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  recipes
    .getRecipes()
    .then((schemes) => {
      res.json(schemes)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" })
    })
})

router.get('/:id/instructions', (req, res) => {
    recipes
        .getInstructions(req.params.id)
    .then(item => res.status(200).json(item))
})

router.get('/:id/shoppingList', (req, res) => {
    recipes.getShoppingList(req.params.id)
    .then(item => res.status(200).json(item))
})

module.exports = router