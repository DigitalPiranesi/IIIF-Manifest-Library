import Item from "./Item";

/**
 * 
 */
export default class WebAnnotation extends Item {
  readonly id: "";
  readonly type: string = "";
  //motivation var
  //Optional AnnotationBody
  target: string = "";

  /**
   * 
   * @param id 
   * @param motivation 
   * @param target 
   */
  constructor(id: string, motivation, target: string) {
      super(id, undefined);
      
      //motivation
      this.target = target;

  }

  /**
   * 
   */
  toJSONString(): string {
    return JSON.stringify(this);
  }
}