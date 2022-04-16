const { Repas } = require("../models");

const alterRepas = (query, update, options) => {
  Repas.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterRepas;
