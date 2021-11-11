import Item from "./Item";

/**
 * This is a container that satisfies the IIIF standard for an `AnnotationPage`
 * being included in a markup-annotation (see `ItemAnnotation` for more)
 * and allows for manipulation of multiple annotations.
 *
 * Documentation is the same as an `Item`, so none given.
 *
 * @author Walter Pach, Clio Lang
 */
export default class ItemAnnotationPage extends Item {
  readonly type: string = "AnnotationPage";

  constructor(id: string){
    super(id, undefined)
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
