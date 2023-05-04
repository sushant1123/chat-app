const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const { chats } = require("./data/data");

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.get("/api/chat", (req, res) => {
  res.json({ chats });
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;

  let chat = chats.filter((chat) => chat._id === id);
  res.json({ chats: chat });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
