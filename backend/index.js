const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");

const app = express();
const server = http.createServer(app)

app.use(cors());

const io = require("socket.io")(server, {cors:{origin:"*"}})

const { addUser, removeUser, getUsers, getUserById } = require("./user");

io.on("connection", (socket) => {
    socket.on("join", (user, callback) => {
        const { error, profile } = addUser({id:socket.id, room:user.room, name:user.name});
        if(error) return callback(error);
        socket.join(user.room);

        socket.emit("message", {user:{name:"admin"}, message:`Welcome ${user.name}`})
        socket.broadcast.to(user.room).emit("message", {user:{name:"admin"}, message:`User ${user.name} has joined`})

        io.to(user.room).emit("roomData", {users:getUsers(user.room)})

        callback();

    })

    socket.on("sendMessage", (msg) => {
        const userId = socket.id;
        const user = getUserById(userId);
        io.to(user.room).emit("message", {user:user, message:msg });
    })

    socket.on("disconnect", () => {
        const user = getUserById(socket.id);
        removeUser(user)
        io.to(user.room).emit("message", {user:{name:"admin"}, message:`${user.name} has left the chat room`});
    })
})

app.get("/", (req, res) => {
    res.send("<h2>Chat app server currently running...</h2>")
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server has started on ${PORT}`))