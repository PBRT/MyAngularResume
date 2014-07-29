resources.factory("Education", ['$resource','Server',function ($resource, Server) {
    return $resource(
            Server.addr + "/education/:id",
        {id: "@id" },
        {
            "update": {method: "PUT", url: Server.addr + "/education/:id"}
        }
    );
}]);