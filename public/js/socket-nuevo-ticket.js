// comando para establecer la conexión

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log(`Servidor conectado`);
});

// Enviar información
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

// escuchar susesos
socket.on('disconnect', function() {
    console.log(`Perdimos coneccion con el servidor.`);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguientTicket) {
        label.text(siguientTicket);
    });

    socket.emit('estadoActual', function(getUltimoTicket) {
        label.text(getUltimoTicket);
    });

});