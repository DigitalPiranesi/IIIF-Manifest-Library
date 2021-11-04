import Item from "./Item";

/**
 * This is the type for the IIIF "AnnotationPage"
 */
export default class ItemWebAnnotationPage extends Item {
  readonly type: string = "AnnotationPage";

  constructor(id: string){
    super(id, undefined)
  }

  /**
   *
   * @return
   */
  toJSONString(): string {
    return JSON.stringify(this);
  }
}
