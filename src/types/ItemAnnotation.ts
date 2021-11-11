import IJSONAble from "./interfaces/IJSONAble";
import Target from "./Target";
import Item from "./Item";
import EnumAnnotationMotivation from "./enums/EnumAnnotationMotivation";
var lib = require("../lib");

/**
 * Main class for what one may traditionally think of as "annotations", especially
 * considered canvas markup.
 *
 * @since 0.1
 * @author Walter Pach, Clio Lang
 * @see ItemWebAnnotation for the W3 Annotation equivalent.
 */
export default abstract class ItemAnnotation extends Item implements IJSONAble{
    readonly type: string = "Annotation";
    motivation: EnumAnnotationMotivation;
    abstract body: any;
    target?: string;

    /**
     * Create a new instance of ItemAnnotation (only used by `super()`)
     *
     * @param id The `id` of this annotation
     * @param motivation The motivation for this annotation
     * @param target Optional target to another piece of the viewer. Must be formatted as a string.
     */
    constructor(id: string, motivation: EnumAnnotationMotivation, target?: string) {
        super(id, undefined);
        this.addContext("http://www.w3.org/ns/anno.jsonld");

        this.motivation = motivation;

        if(lib.isDefined(target)){
          this.target = target;
        }
    }

    /**
     * Set the target of this annotation
     *
     * @param target The target as a string.
     */
    setTarget(target: string) {
        this.target = target;
    }

    /**
     * Get the target of this annotation if it exists.
     *
     * @return The target as a string or null if it does not exist.
     */
    getTarget(): string | null{
      if(lib.isDefined(this.target)){
        return this.target || null;
      }else{
        return null;
      }
    }

    /**
     * Set the body of this annotation to an object.
     * NOTE: This does not neccessarily do anything unless used correctly.
     *
     * @param body The object to set.
     */
    setBody(body: any) {
      this.body = body;
    }

    /**
     * Get the body of this annotation.
     *
     * @return The body if it exists, `undefined` if it does not.
     */
    getBody(): any | undefined{
      return this.body || undefined;
    }

    /**
     * @return A JSON-string of this object and all its properties.
     */
    toJSONString(): string {
      return JSON.stringify(this);
    }
}
