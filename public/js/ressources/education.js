//Declaration de la variable de ressource globale de l'application
var resources = angular.module('myApp.resources', ["ngResource"]);

resources.factory("Education", function ($resource, Server) {
    return $resource(
            Server.addr + "/education/:id",
        {id: "@id" },
        {
            "update": {method: "PUT", url: Server.addr + "/education/:id"}
        }
    );
});