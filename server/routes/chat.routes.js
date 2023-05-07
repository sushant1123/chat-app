const router = require("express").Router();

const { authenticateUser } = require("../middlewares/auth.middleware");
const {
  accessChat,
  getChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chat.controller");

router.route("/").post(authenticateUser, accessChat);
router.route("/").get(authenticateUser, getChats);
router.route("/group").post(authenticateUser, createGroupChat);
router.route("/group").put(authenticateUser, renameGroup);
router.route("/group-remove").put(authenticateUser, removeFromGroup);
router.route("/group-add").put(authenticateUser, addToGroup);

module.exports = router;
