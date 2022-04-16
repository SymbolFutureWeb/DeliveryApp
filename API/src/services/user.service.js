const { User } = require("../models");

const alterUser = (query, update, options) => {
  User.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterUser;
