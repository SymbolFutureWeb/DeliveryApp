const { alterIngredient } = require("../services");
const mongoose = require("mongoose");

const alterIngredients = (req, res) => {
  const { ingredient } = req.params;

  const query = {
      _id: mongoose.Types.ObjectId(ingredient._id),
    },
    update = {
      name: ingredient.name,
      quantity: ingredient.quantity,
      disponibility: ingredient.disponibility,
      image: ingredient.image,
    },
    options = {
      upsert: true,
      new: true,
    };
  alterIngredient(query, update, options).catch((error) => {
    return res.status(500).json({ message: "An internal server occured" });
  });

  return res.status(200).json({ message: "Done !" });
};

module.exports = alterIngredients;
