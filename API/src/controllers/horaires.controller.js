const { alterHoraires } = require("../services");
const mongoose = require("mongoose");

const alterHorairess = (req, res) => {
  const { horaire } = req.body;
  //console.log(req);

  const query = {
      _id: mongoose.Types.ObjectId(req.body._id), //horaire._id,
    },
    update = {
      heureDebut: horaire.heureDebut,
      heureFin: horaire.heureFin,
    },
    options = {
      upsert: true,
      new: true,
    };
  alterHoraires(query, update, options);

  return res.status(200).json({ message: "Done !" });
};

module.exports = alterHorairess;
