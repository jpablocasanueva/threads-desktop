var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblDesk1 = $('#lblEscritorio1');
var lblDesk2 = $('#lblEscritorio2');
var lblDesk3 = $('#lblEscritorio3');
var lblDesk4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblDesks = [lblDesk1, lblDesk2, lblDesk3, lblDesk4];


socket.on('estadoActual', function(data) {
    // console.log(data);
    updateHtml(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    // console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHtml(data.ultimos4);
});


function updateHtml(ultimos4) {

    for (var i = 0; i <= ultimos4.length - 1; i++) {

        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblDesks[i].text('Escritorio ' + ultimos4[i].escritorio);

    }

}