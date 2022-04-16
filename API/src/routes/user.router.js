const { userController } = require("../controllers");

const router = require("express").Router();

router.post("/add", userController.alterUsers);
router.post("/login", userController.authenticate);

module.exports = router;
