const { Commantaire } = require("../models");

const alterCommantaire = (query, update, options) => {
  Commantaire.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterCommantaire;
