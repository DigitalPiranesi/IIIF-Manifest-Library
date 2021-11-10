import IJSONAble from "./interfaces/IJSONAble";
import Target from "./Target";
import Body from "./Body";
var lib = require("../lib");

/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
export default abstract class Annotation implements IJSONAble {

    //@?
    context: string = "";
    id: string;
    readonly type: string;
    //TODO make enum
    motivation: string;
    abstract body: Body;
    target: Target;

    /**
     *
     * @param id
     * @param type
     * @param motivation
     */
    constructor(id: string, type: string, motivation: string) {
        this.id = id;
        this.type = type;
        this.motivation = motivation;
        this.target = new Target();
    }

    /**
     *
     * @param target
     */
    setTarget(target: Target) {
        this.target = target;
    }

    /**
     *
     * @param body
     */
    setBody(body: Body) {
        this.body = body;
    }

    /**
     * @return
     */
    toJSONString(): string {
        return JSON.stringify(this);
    }
}
