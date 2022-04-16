const { alterCommantaire } = require("../services");
const mongoose = require("mongoose");

const alterComment = (req, res) => {
  const { commentaire } = req.params;

  const query = {
      _id: mongoose.Types.ObjectId(commentaire._id),
    },
    update = {
      userId: commentaire.userId,
      restaurantId: commentaire.restaurantId,
      message: commentaire.message,
    },
    options = {
      upsert: true,
      new: true,
    };
  alterCommantaire(query, update, options).catch((error) => {
    return res.status(500).json({ message: "An internal server occured" });
  });

  return res.status(200).json({ message: "Done !" });
};

module.exports = alterComment;
