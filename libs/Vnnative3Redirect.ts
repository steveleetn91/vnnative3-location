import VnNativeOsIndex from "vnnative-3-os/dist/index";
export interface Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void 
    goUrl(url : string,query : Array<{key:string;value:string}>) : string | undefined
    back() : void 
}
export default class Vnnative3Redirect implements Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void {
        const pathName = window.location.pathname;
        let os : String;
        os = (new VnNativeOsIndex).isOs();

        let metaBase : HTMLElement | null = document.getElementById("base");
        let href : string | null = "";

        if( typeof metaBase != null) {
            href = metaBase?.getAttribute("href") ? metaBase?.getAttribute("href") : "";
        }

        if(query.length < 1) {
            if(os === "android") {
                window.location.href = href + '/android_asset/index.html?vn3page=' + url;
            } else if (os === "iOS") {
                window.location.href = href + './index.html?vn3page=' + url;
            } else {
                window.location.href= href + url;
            }
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                if(os === "android") {
                    window.location.href = '/android_asset' + href + '/index.html' + queryString + '&vn3page=' + url;
                } else if (os === "iOS") {
                    window.location.href =  "." + href + '/index.html' + queryString + '&vn3page=' + url;
                } else {
                    window.location.href = href + url + queryString;
                }
                return;
            }
        }
    }
    goUrl(url : string,query : Array<{key:string;value:string}>): string | undefined {
        let link = "";
        const pathName = window.location.pathname;
        let os : String;
        os = (new VnNativeOsIndex).isOs();

        let metaBase : HTMLElement | null = document.getElementById("base");
        let href : string | null = "";

        if( typeof metaBase != null) {
            href = metaBase?.getAttribute("href") ? metaBase?.getAttribute("href") : "";
        }

        if(query.length < 1) {
            if(os === "android") {
                link = '/android_asset' + href + '/index.html?vn3page=' + url;
            } else if (os === "iOS") {
                link = '.' + href + '/index.html?vn3page=' + url;
            } else {
                link = href + url;
            }
            return link;
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                
                if(os === "android") {
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
    back() : void {
        window.history.back();
    }
}