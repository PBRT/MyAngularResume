//Gestion des sockets
services.factory('socket', function (socketFactory) {
    return socketFactory();
}).
    value('version', '0.1');