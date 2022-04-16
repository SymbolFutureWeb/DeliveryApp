const { ingredientsController } = require("../controllers");

const router = require("express").Router();

router.post("/add", ingredientsController);

module.exports = router;
