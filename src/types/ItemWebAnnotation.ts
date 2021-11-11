import Item from "./Item";
import * as LIB from "../lib";
import EnumWebAnnotationMotivation from "./enums/EnumWebAnnotationMotivation";

/**
 *
 */
export default class ItemWebAnnotation extends Item {
  readonly type: string = "Annotation";
  motivation: EnumWebAnnotationMotivation;
  target: string;
  body?: any;

  /**
   * Create a new instance of a W3-compatible web annotation.
   *
   * @param id The id of this annotation
   * @param motivation The motivation of this annotation
   * @param target The target of this annotation (typically a canvas/annotation-page)
   * @param context (Optional) specification of additional contexts (includes W3 Web Annotation context by default).
   */
  constructor(id: string, motivation: EnumWebAnnotationMotivation, target: string, context?: string | string[]) {
    super(id, context);
    this.addContext("http://www.w3.org/ns/anno.jsonld");

    this.motivation = motivation;
    this.target = target;
  }

  /**
   * Set the target of this annotation
   *
   * @param target The ID of a target as a string.
   */
  setTarget(target: string){
    this.target = target;
  }

  /**
   * Set the body of the annotation forcefully.
   * NOTE: This should be done via implementation, but for simplicity can be done
   * programatically here.
   *
   * @param body The object to which to set the body equal.
   */
  setBody(body: any): void{
    this.body = body;
  }

  /**
   * Remove the body of the annotation.
   *
   * @return True if successful, false if it never existed to start with.
   */
  removeBody(): boolean{
    if(typeof this.body !== "undefined"){
      delete this.body;
      return true;
    }

    return false;
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
