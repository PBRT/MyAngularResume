resources.factory("Item", function ($resource, Server) {
    return $resource(
            Server.addr + "/items",
        {id: "@id" },
        {
            "query": {method: "GET", url: Server.addr + "/items", isArray : true}
        }
    );
});
