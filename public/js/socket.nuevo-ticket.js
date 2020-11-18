var socket = io();
var lbl = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Desconectado del servidor');

});

socket.on('estadoActual', function(resp) {
    lbl.text(resp.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(next) {
        lbl.text(next);
    });

});