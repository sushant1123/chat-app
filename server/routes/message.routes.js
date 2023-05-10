const router = require("express").Router();
const { allMessages, sendMessage } = require("../controllers/message.controller");
const { authenticateUser } = require("../middlewares/auth.middleware");

router.route("/:chatId").get(authenticateUser, allMessages);
router.route("/").post(authenticateUser, sendMessage);

module.exports = router;
