const { horairesController } = require("../controllers");

const router = require("express").Router();

router.post("/add", horairesController);

module.exports = router;
