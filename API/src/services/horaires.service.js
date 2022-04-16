const { Horaires } = require("../models");

const alterHoraires = (query, update, options) => {
  Horaires.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterHoraires;
