const mongoose = require("mongoose");

const Restaurant = mongoose.Schema(
  {
    name: { type: String, required: false },
    address: [
      {
        numero: { type: String, required: false },
        avenue: { type: String, required: false },
        ville: { type: String, required: false },
        codePostale: { type: String, required: false },
      },
    ],
    repas: [{ type: String, required: false }],
    horaires: [{ type: String, required: false }],
    ouvert: { type: Boolean, required: false },
    commentaires: [{ type: String, required: false }],
    notes: [
      {
        5: [{ type: Number, requried: false }],
        4: [{ type: Number, requried: false }],
        3: [{ type: Number, requried: false }],
        2: [{ type: Number, requried: false }],
        1: [{ type: Number, requried: false }],
        moyenne: [{ type: Number, requried: false }],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Restaurant", Restaurant);
