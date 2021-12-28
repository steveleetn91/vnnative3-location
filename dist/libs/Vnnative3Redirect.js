"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3Redirect = /** @class */ (function () {
    function Vnnative3Redirect() {
    }
    Vnnative3Redirect.prototype.go = function (url, query) {
        if (query.length < 1) {
            window.location.href = url;
        }
        var queryString = "?";
        for (var i = 0; i < query.length; i++) {
            queryString += "".concat(query[i]['key'], "=").concat(query[i]['value']);
            if ((i + 1) == query.length) {
                window.location.href = url + queryString;
                return;
            }
        }
    };
    Vnnative3Redirect.prototype.back = function () {
        window.history.back();
    };
    return Vnnative3Redirect;
}());
exports.default = Vnnative3Redirect;
