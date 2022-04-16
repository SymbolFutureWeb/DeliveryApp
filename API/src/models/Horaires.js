const mongoose = require("mongoose");

const Horaires = mongoose.Schema(
  {
    heureDebut: { type: String, required: false },
    heureFin: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Horaires", Horaires);
