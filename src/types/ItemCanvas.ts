import Item from "./Item";
import ItemWebAnnotationPage from "./ItemWebAnnotationPage";
import ItemAnnotationPage from "./ItemAnnotationPage";

/**
 * This is the type for the IIIF type "Canvas".
 */
export default class ItemCanvas extends Item {
  readonly type: string = "Canvas";
  readonly width: number;
  readonly height: number;
  annotations: ItemAnnotationPage[];

  /**
   * Create a new instance of Canvas
   *
   * @param id The URI where this canvas is referenced.
   * @param width The width of this canvas.
   * @param height The height of this canvas.
   */
  constructor(id: string, width: number, height: number){
    super(id, undefined);

    this.width = width;
    this.height = height;
    this.annotations = [] as ItemWebAnnotationPage[];
  }

  addAnnotationPage(item: ItemAnnotationPage){
    this.annotations.push(item);
  }

  /**
   * Returns AnnotationPages array
   *
   * @returns annotationPages
   */
  getWebAnnotationPages(): ItemWebAnnotationPage[] {
    return this.items;
  }

  getAnnotationPages(): ItemAnnotationPage[] {
    return this.annotations;
  }
}
