"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vnnative3Query_1 = require("./libs/Vnnative3Query");
const Vnnative3Redirect_1 = require("./libs/Vnnative3Redirect");
class Vnnative3LocationBase {
    constructor() {
        this.query = new Vnnative3Query_1.default;
        this.redirect = new Vnnative3Redirect_1.default;
    }
}
exports.default = Vnnative3LocationBase;
