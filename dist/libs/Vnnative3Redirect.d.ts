export interface Vnnative3RedirectInterface {
    go(url: string, query: Array<{
        key: string;
        value: string;
    }>): void;
    back(): void;
}
export default class Vnnative3Redirect implements Vnnative3RedirectInterface {
    go(url: string, query: Array<{
        key: string;
        value: string;
    }>): void;
    back(): void;
}
