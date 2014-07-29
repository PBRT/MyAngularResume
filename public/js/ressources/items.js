resources.factory("Item",  ['$resource','Server',function ($resource, Server) {
    return $resource(
            Server.addr + "/items",
        {id: "@id" },
        {
            "query": {method: "GET", url: Server.addr + "/items", isArray : true}
        }
    );
}]);
