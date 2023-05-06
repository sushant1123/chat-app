const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: ObjectId, ref: "User" }],
    latestMessage: { type: ObjectId, ref: "Message" },
    groupAdmin: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", chatSchema);
module.exports = ChatModel;
