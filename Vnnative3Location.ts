import Vnnative3Query, { Vnnative3QueryInterface } from "./libs/Vnnative3Query";
import Vnnative3Redirect, { Vnnative3RedirectInterface } from "./libs/Vnnative3Redirect";
interface Vnnative3LocationInterFace {
    query : Vnnative3QueryInterface;
    redirect : Vnnative3RedirectInterface;
}
export default class Vnnative3LocationBase implements Vnnative3LocationInterFace {
    public query : Vnnative3Query;
    public redirect : Vnnative3RedirectInterface;
    constructor(){
        this.query = new Vnnative3Query;
        this.redirect = new Vnnative3Redirect;
    }
}