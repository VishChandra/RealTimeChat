// Write your JavaScript code.

$(document).ready(function ()
{
    var connection = new WebSocketManager.Connection("ws://localhost:5051/chat");
    conection.enableLogging = true;

    conenction.connectionMethods.onConnected = () =>
    {

    }

    connection.connectionMethods.onDisconnected = () =>
    {

    }

    connection.Start();
});
