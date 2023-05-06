const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.route");

const { chats } = require("./data/data");
const { connectToDB } = require("./connections/mongodb");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.get("/health-check", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/user", userRoutes);

// app.get("/api/chat", (req, res) => {
//   res.json({ chats });
// });

// app.get("/api/chat/:id", (req, res) => {
//   const { id } = req.params;

//   let chat = chats.filter((chat) => chat._id === id);
//   res.json({ chats: chat });
// });

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`.yellow.bold);
});
