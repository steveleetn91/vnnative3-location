"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3Query = /** @class */ (function () {
    function Vnnative3Query() {
    }
    Vnnative3Query.prototype.get = function (key) {
        var currentUrl = window.location.href;
        var queryString = currentUrl.split('?');
        if (queryString.length <= 1) {
            return "";
        }
        var queryStringArray = queryString[1].split('&');
        for (var i = 0; i < queryStringArray.length; i++) {
            var query = queryStringArray[i].split('=');
            if (query[0] === key) {
                return query.length <= 1 ? "" : String(query[1]);
            }
        }
        return "";
    };
    return Vnnative3Query;
}());
exports.default = Vnnative3Query;
