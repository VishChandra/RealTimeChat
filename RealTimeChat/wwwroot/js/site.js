// Write your JavaScript code.

$(document).ready(function () {

    var connection = new WebSocketManager.Connection("ws://localhost:5051/chat");
    connection.enableLogging = true;

    connection.connectionMethods.onConnected = () => {

    };

    connection.connectionMethods.onDisconnected = () => {

    };

    var $name = prompt("Enter your name");
    connection.clientMethods["pingMessage"] = (socketId, message) => {
        var messageText = socketId + ' said: ' + message;
        $('#messages').append('<li>' + messageText + '</li>');
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
        console.log(messageText);
    };

    connection.start();

    var $messagecontent = $('#message-content');
    $messagecontent.keyup(function (e) {
        if (e.keyCode === 13) {
            var message = $messagecontent.val().trim();
            if (message.length === 0) {
                return false;
            }
            connection.invoke("SendMessage", $name, message);
            $messagecontent.val('');
        }
    });
    $('#messages').scrollTop($('#messages').prop('scrollHeight'));

});
