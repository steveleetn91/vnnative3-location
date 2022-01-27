"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vnnative3Redirect {
    go(url, query) {
        const pathName = window.location.pathname;
        let os;
        os = document.getElementById("os");
        if (query.length < 1) {
            if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "android") {
                window.location.href = '/android_asset/index.html?vn3page=' + url;
            }
            else if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "iOS") {
                window.location.href = './index.html?vn3page=' + url;
            }
            else {
                window.location.href = url;
            }
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "android") {
                    window.location.href = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                }
                else if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "iOS") {
                    window.location.href = './index.html' + queryString + '&vn3page=' + url;
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
        let os;
        os = document.getElementById("os");
        if (query.length < 1) {
            if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "android") {
                link = '/android_asset/index.html?vn3page=' + url;
            }
            else if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "iOS") {
                link = './index.html?vn3page=' + url;
            }
            else {
                link = url;
            }
            return link;
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "android") {
                    link = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                }
                else if ((os === null || os === void 0 ? void 0 : os.getAttribute("content")) === "iOS") {
                    link = './index.html' + queryString + '&vn3page=' + url;
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
