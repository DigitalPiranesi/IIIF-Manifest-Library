import IJSONAble from "./interfaces/IJSONAble";
import Target from "./Target";
import AnnotationBody from "./AnnotationBody";
import EnumAnnotationMotivation from "./enums/EnumAnnotationMotivation";
var lib = require("../lib");

/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
export default abstract class Annotation implements IJSONAble {
    [ "@context" ]?: string | string[];
    id: string;
    readonly type: string = "Annotation";
    motivation: EnumAnnotationMotivation;
    abstract body: AnnotationBody;
    target?: Target;

    /**
     *
     * @param id
     * @param type
     * @param motivation
     */
    constructor(id: string, type: string, motivation: EnumAnnotationMotivation, target?: Target) {
        this.id = id;
        this.type = type;
        this.motivation = motivation;

        if(lib.isDefined(target)){
          this.target = target;
        }
    }

    /**
     *
     * @param target
     */
    setTarget(target: Target) {
        this.target = target;
    }

    getTarget(): Target | null{
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
    setBody(body: AnnotationBody) {
        this.body = body;
    }

    /**
     * @return
     */
    toJSONString(): string {
        return JSON.stringify(this);
    }
}
