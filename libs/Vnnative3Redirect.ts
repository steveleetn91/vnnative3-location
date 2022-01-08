export interface Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void 
    goUrl(url : string,query : Array<{key:string;value:string}>) : string | undefined
    back() : void 
}
export default class Vnnative3Redirect implements Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void {
        const pathName = window.location.pathname;
        if(query.length < 1) {
            if(pathName.includes("/android_asset")) {
                window.location.href = '/android_asset/index.html?vn3page=' + url;
            } else {
                window.location.href=url;
            }
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                
                if(pathName.includes("/android_asset")) {
                    window.location.href = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                } else {
                    window.location.href = url + queryString;
                }
                return;
            }
        }
    }
    goUrl(url : string,query : Array<{key:string;value:string}>): string | undefined {
        let link = "";
        const pathName = window.location.pathname;
        if(query.length < 1) {
            if(pathName.includes("/android_asset")) {
                link = '/android_asset/index.html?vn3page=' + url;
            } else {
                link = url;
            }
            return link;
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                
                if(pathName.includes("/android_asset")) {
                    link = '/android_asset/index.html' + queryString + '&vn3page=' + url;
                } else {
                    link = url + queryString;
                }
                return link;
            }
        }
    }
    back() : void {
        window.history.back();
    }
}