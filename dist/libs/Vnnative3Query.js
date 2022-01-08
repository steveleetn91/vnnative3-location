"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vnnative3Query {
    get(key) {
        let currentUrl = window.location.href;
        let queryString = currentUrl.split('?');
        if (queryString.length <= 1) {
            return "";
        }
        let queryStringArray = queryString[1].split('&');
        for (let i = 0; i < queryStringArray.length; i++) {
            let query = queryStringArray[i].split('=');
            if (query[0] === key) {
                return query.length <= 1 ? "" : String(query[1]);
            }
        }
        return "";
    }
}
exports.default = Vnnative3Query;
