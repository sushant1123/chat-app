const router = require("express").Router();

const { registerUser, authUser } = require("../controllers/user.controller");

router.route("/register").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
