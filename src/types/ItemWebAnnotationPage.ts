import Item from "./Item";

/**
 * This is mainly just a container class for differentiating safely between
 * W3 Web Annotations and markup-style annotations.
 *
 * Documentation is the same as an `Item`, so none given.
 *
 * @author Walter Pach, Clio Lang
 */
export default class ItemWebAnnotationPage extends Item {
  readonly type: string = "AnnotationPage";

  constructor(id: string){
    super(id, undefined);
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
