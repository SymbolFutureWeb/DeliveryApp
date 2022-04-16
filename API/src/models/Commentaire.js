const mongoose = require("mongoose");

const Commentaire = mongoose.Schema(
  {
    userId: { type: String, required: false },
    restaurantId: [{ type: String, required: false }],
    message: { type: String, required: false },
    date: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Commentaire", Commentaire);
