const path = require("path");

/**
 * GET /
 * Homepage
 */
exports.index = function (request, response) {
    response.sendFile(path.resolve("public/index.html"));
};