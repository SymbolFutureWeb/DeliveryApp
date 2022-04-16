const mongoose = require("mongoose");

const Repas = mongoose.Schema(
  {
    name: { type: String, required: false },
    ingredients: [{ type: String, required: false }],
    disponibility: { type: Boolean, required: false },
    image: [{ type: String, required: false }],
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
    categories: [{ type: String, required: false }],
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Repas", Repas);
