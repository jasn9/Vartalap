
var express = require('express');

// express app

var socket = require('socket.io');

var app = express();

app.use(express.json());       // to support JSON-encoded bodies

app.use(express.urlencoded());

app.use(express.static(__dirname+'/public'));


// server listening on port 4000
var serv = app.listen(4000, function(){

    console.log('Started listening on PORT : 4000');

});

var io = socket(serv);

io.on('connection', function(socket){
    console.log(' socket starts listening in localhost:4000 '+socket.id);

    socket.on('chat', function(data){
        console.log(" received "+data.handle);

        io.emit('chat',data);


    })

});

