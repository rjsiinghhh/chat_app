const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3001
const router = require('./router');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const io = require('socket.io')(http, { // v3.x of socket.io requires cors settings for connection to be established
  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
})


app.use(cors());
app.use(router);

io.on('connection', (socket) => { //Begins the messaging service
  console.log('We have a new connection');

socket.on('join', ({ name, room }, callback) => {
console.log(name, room);



});

  io.on('disconnect', () => {
    console.log('User has left');
  })
});



server.listen(PORT, () => console.log(`Server has started on PORT ${ PORT }`));



// 51
