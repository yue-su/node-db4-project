const express = require("express")

const recipes = require("./recipes-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  recipes.find()
    .then((schemes) => {
      res.json(schemes)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" })
    })
})

module.exports = router