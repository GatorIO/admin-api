"use strict";
const utils = require("node-utils");
const restify = require("restify");
let client = restify.createJsonClient({
    url: utils.config.settings()['apiUrl'],
    version: '*'
});
module.exports = client;
//# sourceMappingURL=client.js.map