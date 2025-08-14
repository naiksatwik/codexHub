const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/userRoutes");
const codeRoutes = require("./routes/runApi");
const ACTION = require("./Action");


app.use("/api/auth", authRoutes);
app.use("/api/code", codeRoutes);

// connecting to mangoDb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// not production grade practice  . i can store in DB

const userSocketMap ={};
const getAllConnectedUser =(roomId) =>{
      return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
            return {
                  socketId,
                  userName :  userSocketMap[socketId],
            }
      })
}

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  socket.on(ACTION.JOIN, ({roomId, username})=>{

      userSocketMap[socket.id] = username;
      socket.join(roomId); // create new room . room id is new room name . if already exists then this socket get added
      const clients = getAllConnectedUser(roomId);
      console.log(clients)
      clients.forEach(({socketId})=>{
            io.to(socketId).emit(ACTION.JOINED,{
                  clients,
                  username,
                  socketId : socket.id,
            });
      })
  })


  socket.on(ACTION.CODE_CHANGE,({roomId,code})=>{

      // socket.in --> it will send code to other not me 
      socket.in(roomId).emit(ACTION.CODE_CHANGE ,{code});

  })
  
  socket.on(ACTION.SYNC_CODE,({code,socketId})=>{

      // socket.in --> it will send code to other not me 
      io.to(socketId).emit(ACTION.CODE_CHANGE ,{code});

  })
  socket.on(ACTION.DISCONNECTING,
      ()=>{
           const  rooms = [...socket.rooms];
           rooms.forEach((roomId)=>{
               socket.in(roomId).emit(ACTION.DISCONNECTED,{
                  socketId: socket.id,
                  username : userSocketMap[socket.id],
               })
           });

           delete userSocketMap[socket.id];

           socket.leave();
      }
  )


});


// server running ...
server.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} running...`);
});


