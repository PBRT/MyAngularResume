//Declaration de la variable de constante globale de l'application
var constants = angular.module('myApp.constants', [])

constants.constant( 'Server', {
    'addr': 'http://192.168.2.69:1337'
});
