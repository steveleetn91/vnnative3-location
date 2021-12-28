"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3Query_1 = require("./libs/Vnnative3Query");
var Vnnative3Redirect_1 = require("./libs/Vnnative3Redirect");
var Vnnative3LocationBase = /** @class */ (function () {
    function Vnnative3LocationBase() {
        this.query = new Vnnative3Query_1.default;
        this.redirect = new Vnnative3Redirect_1.default;
    }
    return Vnnative3LocationBase;
}());
exports.default = Vnnative3LocationBase;
