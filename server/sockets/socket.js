const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')

const tickeControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let next = tickeControl.siguiente();
        console.log(next);
        callback(next);
    })

    //emitir evento estado actual

    client.emit('estadoActual', {
        actual: tickeControl.getLasTicket(),
        ultimos4: tickeControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = tickeControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        client.broadcast.emit('ultimos4', {
            ultimos4: tickeControl.getUltimos4()
        });


    });


});