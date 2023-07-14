const express = require("express");
const app = express();
const http = require("http");
require("./connectDB");
const server = http.createServer(app);
const cors = require("cors");

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
  methods: "*",
});

const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);

server.listen(8080, () => {
  console.log("server running at port", 8080);
});
