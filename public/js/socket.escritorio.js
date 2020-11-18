var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El Escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var lbl = $('small')

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);

        if (resp === 'No hay mas tickets') {
            lbl.text(resp);
            alert(resp);
            return;
        }
        lbl.text(`Ticket ` + resp.numero)
    });

});