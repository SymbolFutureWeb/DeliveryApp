const { restaurantController } = require("../controllers");

const router = require("express").Router();

router.post("/add", restaurantController);

module.exports = router;
