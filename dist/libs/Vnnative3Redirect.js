"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vnnative3Redirect {
    go(url, query) {
        const pathName = window.location.pathname;
        if (query.length < 1) {
            if (pathName.includes("/android_asset")) {
                window.location.href = '/android_asset/index.html?vn3page=' + url;
            }
            else {
                window.location.href = url;
            }
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (pathName.includes("/android_asset")) {
                    window.location.href = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                }
                else {
                    window.location.href = url + queryString;
                }
                return;
            }
        }
    }
    goUrl(url, query) {
        let link = "";
        const pathName = window.location.pathname;
        if (query.length < 1) {
            if (pathName.includes("/android_asset")) {
                link = '/android_asset/index.html?vn3page=' + url;
            }
            else {
                link = url;
            }
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (pathName.includes("/android_asset")) {
                    link = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                }
                else {
                    link = url + queryString;
                }
                return link;
            }
        }
    }
    back() {
        window.history.back();
    }
}
exports.default = Vnnative3Redirect;
