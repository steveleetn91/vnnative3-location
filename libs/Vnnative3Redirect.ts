import VnNativeOsIndex from "vnnative-3-os/dist/index";

export interface Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void 
    goUrl(url : string,query : Array<{key:string;value:string}>) : string | undefined
    back() : void 
    supportMoveScreen() : void 
}
export default class Vnnative3Redirect implements Vnnative3RedirectInterface {
    go(url : string,query : Array<{key:string;value:string}>) : void {
        const pathName = window.location.pathname;
        let os : String;
        os = (new VnNativeOsIndex).isOs();
        if(query.length < 1) {
            if(os === "Android") {
                history.pushState({}, '', './index.html?vn3page=' + url)
            } else if (os === "iOS") {
                history.pushState({}, '', './index.html?vn3page=' + url)
            } else {
                history.pushState({}, '', url)
            }
            return
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                if(os === "Android") {
                    history.pushState({}, '', './index.html' + queryString + '&vn3page=' + url)
                } else if (os === "iOS") {
                    history.pushState({}, '', './index.html' + queryString + '&vn3page=' + url)
                } else {
                    history.pushState({}, '', url + queryString)
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
        if(query.length < 1) {
            if(os === "Android") {
                link = './index.html?vn3page=' + url;
            } else if (os === "iOS") {
                link = './index.html?vn3page=' + url;
            } else {
                link = url;
            }
            return link;
        }
        let queryString = "?";
        for(let i=0;i<query.length;i++){
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if((i+1) == query.length) {
                
                if(os === "Android") {
                    link = './index.html' + queryString + '&vn3page=' + url;
                } else if (os === "iOS") {
                    link = './index.html' + queryString + '&vn3page=' + url;
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
    supportMoveScreen(): void {
        let links : NodeListOf<Element> = document.querySelectorAll("#root a");
        links.forEach((link : Element) => {
            link.addEventListener("click",(ev : Event) => {
                let routerLink : string | null = link.getAttribute("link");
                let go : string = routerLink != null ? routerLink : "";
                if(go !== "" ) {
                    this.go(go,[]);
                }
            })
        })
    }
}