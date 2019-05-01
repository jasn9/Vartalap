
const socket = io('http://localhost:4000/');

console.log(socket.id);

var handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    output = document.getElementById('output'),
    btn = document.getElementById('send');


btn.addEventListener('click', function(){
    console.log(' Event Init ');
    data ={
        message : message.value,
        handle : handle.value,

    };
    socket.emit('chat', data);
    


});

socket.on('chat', function(data){
    console.log(' chat update by server ');
    output.innerHTML += '<p><strong>'+data.handle + '</strong> : ' + data.message + '</p>' ;
});
