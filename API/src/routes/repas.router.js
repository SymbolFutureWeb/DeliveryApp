const { repasController } = require("../controllers");

const router = require("express").Router();

router.post("/add", repasController);

module.exports = router;
