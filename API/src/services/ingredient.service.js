const { Ingredient } = require("../models");

const alterIngredient = (query, update, options) => {
  Ingredient.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterIngredient;
