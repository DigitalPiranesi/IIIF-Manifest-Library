import Item from "./Item";

/**
 * This is the type for the IIIF "AnnotationPage"
 */
export default class ItemAnnotationPage extends Item {
  readonly type: string = "AnnotationPage";

  constructor(id: string){
    super(id, undefined);
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
