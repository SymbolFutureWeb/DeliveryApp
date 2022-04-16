const { alterRepas } = require("../services");
const mongoose = require("mongoose");

const alterRepass = (req, res) => {
  const { repas } = req.params;

  const query = {
      _id: mongoose.Types.ObjectId(repas._id),
    },
    update = {
      name: repas.name,
      ingredients: repas.ingredients,
      disponibility: repas.disponibility,
      image: repas.image,
      notes: {
        5: repas.notes["5"],
        4: repas.notes["4"],
        3: repas.notes["3"],
        2: repas.notes["2"],
        1: repas.notes["1"],
        moyenne: repas.notes.moyenne,
      },
      categories: repas.categories,
    },
    options = {
      upsert: true,
      new: true,
    };
  alterRepas(query, update, options).catch((error) => {
    return res.status(500).json({ message: "An internal server occured" });
  });

  return res.status(200).json({ message: "Done !" });
};

module.exports = alterRepass;
