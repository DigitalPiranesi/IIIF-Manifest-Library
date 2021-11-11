import Item from "./Item";
import ItemWebAnnotationPage from "./ItemWebAnnotationPage";
import ItemAnnotationPage from "./ItemAnnotationPage";

/**
 * This is the type for the IIIF type `Canvas`. It allows for the creation of a
 * canvas within a viewer, the attaching of W3 annotations, markup annotations,
 * and metadata.
 *
 * @since 0.1
 * @author Clio Lang, Walter Pach
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

  /**
   * Add an annotation-markup page to the array of pages.
   *
   * @param page The annotation page to add
   */
  addAnnotationPage(page: ItemAnnotationPage){
    this.annotations.push(page);
  }

  /**
   * Get all of the W3 annotation pages attached to this canvas.
   *
   * @returns An array of `ItemWebAnnotationPage`
   */
  getWebAnnotationPages(): ItemWebAnnotationPage[] {
    return this.items;
  }

  /**
   * Get all of the annotation markup pages attached to this canvas.
   *
   * @returns An array of `ItemAnnotationPage`
   */
  getAnnotationPages(): ItemAnnotationPage[] {
    return this.annotations;
  }
}
