resources.factory("Skills",  ['$resource','Server',function ($resource, Server) {
    return $resource(
            Server.addr + "/skills",
        {id: "@id" },
        {
            "query": {method: "GET", url: Server.addr + "/skills", isArray: true}
        }
    );
}]);
