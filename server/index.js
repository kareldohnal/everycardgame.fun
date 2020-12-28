const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./routes/router');

const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

app.use(router);

io.on("connection", (socket) => {
    console.log("Connection" + socket)
})

server.listen(port, () => console.log(`Listening on port ${port}`));
