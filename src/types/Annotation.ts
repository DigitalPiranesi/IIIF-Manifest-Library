import IJSONAble from "./interfaces/IJSONAble";
import Target from "./Target";
import Item from "./Item";
import EnumAnnotationMotivation from "./enums/EnumAnnotationMotivation";
var lib = require("../lib");

/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
export default abstract class Annotation extends Item implements IJSONAble{
    readonly type: string = "Annotation";
    motivation: EnumAnnotationMotivation;
    abstract body: any;
    target?: string;

    /**
     *
     * @param id
     * @param type
     * @param motivation
     */
    constructor(id: string, motivation: EnumAnnotationMotivation, target?: string) {
        super(id, undefined);

        this.motivation = motivation;

        if(lib.isDefined(target)){
          this.target = target;
        }
    }

    /**
     *
     * @param target
     */
    setTarget(target: string) {
        this.target = target;
    }

    getTarget(): string | null{
      if(lib.isDefined(this.target)){
        return this.target || null;
      }else{
        return null;
      }
    }

    /**
     *
     * @param body
     */
    setBody(body: any) {
      this.body = body;
    }

    getBody(): any{
      return this.body;
    }

    /**
     * @return
     */
    toJSONString(): string {
      return JSON.stringify(this);
    }
}
