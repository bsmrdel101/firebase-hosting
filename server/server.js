const express = require('express');
const app = express();
const http = require('http');
const { createServer } = require('vite');
const { Server } = require('socket.io');

async function startServer() {
  // Create Vite development server
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);

  // Socket.io setup
  const server = http.createServer(app);
  const io = new Server(server);

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
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
