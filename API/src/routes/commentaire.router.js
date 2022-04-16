const { commentaireController } = require("../controllers");

const router = require("express").Router();

router.post("/add", commentaireController);

module.exports = router;
