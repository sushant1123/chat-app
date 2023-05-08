const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
// const winston = require("winston");
const morgan = require("morgan");

const userRoutes = require("./routes/user.route");
const chatRoutes = require("./routes/chat.routes");

// const { chats } = require("./data/data");
const { connectToDB } = require("./connections/mongodb");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
// const logger = require("./utils/logger");

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// logger
app.use(morgan("dev")); //it is a middleware only

// logger.add(
//   new winston.transports.Console({
//     format: winston.format.simple(),
//   })
// );

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection

connectToDB();

//routes

app.get("/health-check", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

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
