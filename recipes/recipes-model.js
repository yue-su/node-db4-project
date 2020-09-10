const db = require("../data/dbconfig")

const find = () => {
  return db("recipes")
}

module.exports = {
    find,
}