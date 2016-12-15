// server.js

// Setup dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const api = require("./src/controller/api");
const index = require("./src/controller/index");

//Setup database
const databaseUri = "mongodb://mongodb:27017";
mongoose.connect(databaseUri, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + databaseUri + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + databaseUri);
    }
});

//Setup application
app.set("env", "dev");
app.use(express.static(__dirname + "/public"));
app.use(morgan(app.get("env")));
app.use(bodyParser.urlencoded({"extended":"true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(methodOverride());

//Setup routes
app.get("/api/demo", api.populateDemoData);
app.get("/api/question/:name", api.findQuestion);
app.get("/api/", api.index);
app.get("/*", index.index);
app.post("/api/ticket", api.submitTicket);

//Startup server
app.set("port", 8080);
app.listen(app.get("port"), function () {
    console.log("App is running at http://localhost:%d in %s mode", app.get('port'), app.get('env'));
    console.log("  Press CTRL-C to stop\n");
});