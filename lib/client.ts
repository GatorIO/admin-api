import utils = require("node-utils");
import restify = require("restify");

//  The global restify client for the API calls

let client: restify.Client = restify.createJsonClient({
    url: utils.config.settings()['apiUrl'],
    version: '*'
});

export = client;

