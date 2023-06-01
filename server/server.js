const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


// Socket.io
io.on('connection', (socket) => {
  socket.on('TEST', () => {
    io.emit('TEST');
  });
});

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('=======================');
});