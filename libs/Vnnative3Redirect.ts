import VnNativeOsIndex from "vnnative-3-os/dist/index";
export interface Vnnative3RedirectInterface {
    go(url: string, query: Array<{ key: string; value: string }>,packageName : string): void
    goUrl(url: string, query: Array<{ key: string; value: string }>,packageName : string): string | undefined
    back(): void
}
export default class Vnnative3Redirect implements Vnnative3RedirectInterface {
    go(url: string, query: Array<{ key: string; value: string }>,packageName : string = ""): void {
        let os: String;
        os = (new VnNativeOsIndex).isOs();
        let href: string = "";
        let baseUrl: string | null | undefined = "";
        baseUrl = document.getElementById("base") ? document.getElementById("base")?.getAttribute("href") : "";
        if (typeof baseUrl == "string" && packageName === "") {
            href = baseUrl;
        } 
        href += packageName;

        if (query.length < 1) {
            if (os === "android") {
                window.location.href =  '/android_asset' + href + '/index.html?vn3page=' + url;
            } else if (os === "iOS") {
                window.location.href =  "." + href + '/index.html?vn3page=' + url;
            } else {
                window.location.href = href + url;
            }
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (os === "android") {
                    window.location.href = '/android_asset' + href + '/index.html' + queryString + '&vn3page=' + url;
                } else if (os === "iOS") {
                    window.location.href = "." + href + '/index.html' + queryString + '&vn3page=' + url;
                } else {
                    window.location.href = href + url + queryString;
                }
                return;
            }
        }
    }
    goUrl(url: string, query: Array<{ key: string; value: string }>,packageName : string = ""): string | undefined {
        let link = "";
        let os: String;
        os = (new VnNativeOsIndex).isOs();

        let href: string = "";
        let baseUrl: string | null | undefined = "";
        baseUrl = document.getElementById("base") ? document.getElementById("base")?.getAttribute("href") : "";
        if (typeof baseUrl == "string"  && packageName === "" ) {
            href = baseUrl;
        } 
        href += packageName;
        
        if (query.length < 1) {
            if (os === "android") {
                link = '/android_asset' + href + '/index.html?vn3page=' + url;
            } else if (os === "iOS") {
                link = '.' + href + '/index.html?vn3page=' + url;
            } else {
                link = href + url;
            }
            return link;
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (os === "android") {
                    link = '/android_asset' + href + '/index.html' + queryString + '&vn3page=' + url;
                } else if (os === "iOS") {
                    link = "." + href + '/index.html' + queryString + '&vn3page=' + url;
                } else {
                    link = href + url + queryString;
                }
                return link;
            }
        }
    }
    back(): void {
        window.history.back();
    }
}