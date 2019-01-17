"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const basicRoutes_1 = require("./routes/api/basicRoutes");
class App {
    constructor() {
        this.routePath = new basicRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePath.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map