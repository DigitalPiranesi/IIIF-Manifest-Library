import Item from "./Item";
import * as LIB from "../lib";
import EnumWebAnnotationMotivation from "./enums/EnumWebAnnotationMotivation";

/**
 *
 */
export default class ItemWebAnnotation extends Item {
  readonly type: string = "Annotation";
  motivation: EnumWebAnnotationMotivation;
  target: any; // Target can also be a custom object with all kinds of properties. Let's just leave it as `any` for now
  //TODO: Optional AnnotationBody

  /**
   *
   * @param id
   * @param motivation
   * @param target
   */
  constructor(id: string, motivation: EnumWebAnnotationMotivation, target: string, context?: string | string[]) {
    super(id, context);
    this.addContext("http://www.w3.org/ns/anno.jsonld");

    this.motivation = motivation;
    this.target = target;
  }

  /**
   *
   * @param target
   */
  setTarget(target: any){
    this.target = target;
  }

  /**
   *
   * @return
   */
  toJSONString(): string {
    return JSON.stringify(this);
  }
}
