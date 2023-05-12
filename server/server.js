const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const userRoutes = require("./routes/user.route");
const chatRoutes = require("./routes/chat.routes");
const messageRoutes = require("./routes/message.routes");

// const { chats } = require("./data/data");
const { connectToDB } = require("./connections/mongodb");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// logger
app.use(morgan("dev")); //it is a middleware only

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
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`.yellow.bold);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    // origin: "http://localhost:3000", // dev
    origin: "https://informal-talk.vercel.app", // prod
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined room: ", room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
