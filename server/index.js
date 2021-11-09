const express = require("express");
const app = express();
const {getData}=require("./getData")
const router=require("./router")
const cors= require("cors");
const http = require("http");
const axios= require("axios");

  
  app.use(cors());

const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: '*',
    }
  });

//const io = socketIo(server); // < Interesting!

io.on("connection", (socket) => {
    console.log("New client connected");
    
  const  data= getApiAndEmit(socket);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
app.use("/",router);

const getApiAndEmit = async (socket) => {
    const {data}= await axios.get("https://www.bitstamp.net/api/v2/order_book/btcusd/");
    const response = data;
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };

server.listen(4001,()=>{
    console.log("server is runing");
})