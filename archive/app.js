const cors = require("cors");

const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(cors());
app.use(index);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
});

const getApiAndEmit = socket => {
  const response = new Date();
  console.log(response)
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));