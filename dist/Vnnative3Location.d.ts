import Vnnative3Query, { Vnnative3QueryInterface } from "./libs/Vnnative3Query";
import { Vnnative3RedirectInterface } from "./libs/Vnnative3Redirect";
interface Vnnative3LocationInterFace {
    query: Vnnative3QueryInterface;
    redirect: Vnnative3RedirectInterface;
}
export default class Vnnative3LocationBase implements Vnnative3LocationInterFace {
    query: Vnnative3Query;
    redirect: Vnnative3RedirectInterface;
    constructor();
}
export {};
