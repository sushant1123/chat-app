const router = require("express").Router();

const { registerUser, loginUser, allUsers } = require("../controllers/user.controller");
const { authenticateUser } = require("../middlewares/auth.middleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(authenticateUser, allUsers);

module.exports = router;
