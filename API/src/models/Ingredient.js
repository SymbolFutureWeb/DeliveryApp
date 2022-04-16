const mongoose = require("mongoose");

const Ingredient = mongoose.Schema(
  {
    name: { type: String, required: false },
    quantity: { type: Number, required: false },
    disponibility: { type: Boolean, required: false },
    image: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    //toJSON,
  }
);

module.exports = mongoose.model("Ingredient", Ingredient);
