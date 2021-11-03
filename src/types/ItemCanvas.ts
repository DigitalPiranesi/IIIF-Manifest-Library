import Item from "./Item";
import ItemAnnotationPage from "./ItemAnnotationPage";

/**
 * This is the type for the IIIF type "Canvas".
 */
export default class ItemCanvas extends Item {
  readonly type: string = "Canvas";
  readonly width: number;
  readonly height: number;
  annotationPages: ItemAnnotationPage[];

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
  }

  /**
   * Add an ItemAnnotationPage to annotationPages
   * 
   * @param annotationPage the ItemAnnotationPage
   */
  addAnnotationPage(annotationPage: ItemAnnotationPage) {
    try {
      this.annotationPages.push(annotationPage);
    } catch(e: unknown) {
      console.log("Unable to add annotation page");
    }
    
  }

  /**
   * Removes an ItemAnnotationPage to annotationPages
   * 
   * @param annotationPage the ItemAnnotationPage
   */
  removeAnnotationPage(annotationPage: ItemAnnotationPage) {
    this.annotationPages.forEach((element, index)=> {
      if(element == annotationPage) 
        delete this.annotationPages[index];
      else
        console.log("Unable to find annotationPage to delete")
    });
  }

  /**
   * Returns AnnotationPages array
   * 
   * @returns annotationPages
   */
  getAnnotationPages() {
    return this.annotationPages;
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
