const { Restaurant } = require("../models");

const alterRestaurant = (query, update, options) => {
  Restaurant.findOneAndUpdate(query, update, options, (error, result) => {
    error && console.log("an erorr occured", error);
  });
};

module.exports = alterRestaurant;
