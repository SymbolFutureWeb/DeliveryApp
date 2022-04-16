const { alterrestaurants } = require("../services");
const mongoose = require("mongoose");

const alterRestaurants = (req, res) => {
  const { restaurant } = req.params;

  const query = {
      _id: mongoose.Types.ObjectId(restaurant._id),
    },
    update = {
      name: restaurant.name,
      address: {
        numero: restaurant.address.numero,
        avenue: restaurant.address.avenue,
        ville: restaurant.address.ville,
        codePostale: restaurant.address.codePostale,
      },
      repas: restaurant.repas,
      horaires: restaurant.horaires,
      ouvert: restaurant.ouvert,
      commentaires: restaurant.commentaires,
      notes: {
        5: restaurant.notes["5"],
        4: restaurant.notes["4"],
        3: restaurant.notes["3"],
        2: restaurant.notes["2"],
        1: restaurant.notes["1"],
        moyenne: restaurant.notes.moyenne,
      },
    },
    options = {
      upsert: true,
      new: true,
    };
  alterrestaurants(query, update, options).catch((error) => {
    return res.status(500).json({ message: "An internal server occured" });
  });

  return res.status(200).json({ message: "Done !" });
};

module.exports = alterRestaurants;
