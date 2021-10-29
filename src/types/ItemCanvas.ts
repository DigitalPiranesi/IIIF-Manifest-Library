import Item from "./Item";

/**
 * This is the type for the IIIF type "Canvas".
 */
export default class ItemCanvas extends Item {
  readonly type: string = "Canvas";
  readonly width: number;
  readonly height: number;

  /**
   * Create a new instance of Canvas
   *
   * @param id The URI where this canvas is referenced.
   * @param width The width of this canvas.
   * @param height The height of this canvas.
   */
  constructor(id: string, width: number, height: number){
    super(id);
    this.width = width;
    this.height = height;
  }

  toJSONString(): string {
    return JSON.stringify(this);
  }
}
