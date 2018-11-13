const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const express = require('express');

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    socket.on("chat message", function(msg) {
        if(msg) io.emit("chat message", msg);
    });
});

http.listen(3000, function() {
    console.log("listening on *:3000");
});
