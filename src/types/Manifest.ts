var lib = require("../lib");

import Label from "./Label";
import IJSONAble from "./interfaces/IJSONAble";
import Item from "./Item";

export default class Manifest implements IJSONAble {
  id = "";
  readonly type: string = "Manifest";
  label: Label | null;

  /*
   * Items is a single object whose properties are the `id` of an item and
   * the item:
   *
   * items:
   * {
   *   "id1": Item1,
   *   "id2": Item2,
   *   etc.
   * }
   */
  items: {[s: string]: Item} = {};

  /**
   * Construct a new instance of Manifest
   *
   * @param contextVersion The version of the IIIF standard to use. Must be a number
   * @param id The unique URI for this manifest (where it can be found hosted).
   */
  constructor(contextVersion: number, id: string){
    lib.ASSERT(contextVersion !== undefined);
    lib.ASSERT(id !== undefined);

    var context:any = {"@context": "http://iiif.io/api/presentation/" + contextVersion + "/context.json"};
    Object.assign(this, context);

    this.id = id;
    this.label = new Label("en");
  }

  /**
   * Add label to this manifest.
   *
   * @param label The label to add to the manifest (must not be null). //getLabel already determines if undefined?
   */
  addLabel(label: Label){
    this.label = label;
  }

  /**
   * Removes label from manifest, makes label undefined
   *
   * @return The prior instance of label
   */
  removeLabel(): Label | null {
    if(this.label !== undefined){
      var previous = this.label;
      this.label = null;

      return previous;
    }else{
      return null;
    }
  }

  /**
   * Get the label associated with this manifest or null.
   *
   * @see src/types/Label.ts
   * @return The instance of Label or null if it does not exist.
   */
  getLabel(): Label | null{
    if(this.label !== undefined){
      return this.label;
    }else{
      return null;
    }
  }

  /**
   * Add an item to the item list. Same `id` must not exist or the function will
   * fail unless `force` is set.
   *
   * @param item The item to add
   * @param force (Optional) If true, the function will override the existing entry with the same `id`.
   * @return True if insertion was successful, false if not.
   */
  addItem(item: Item, force?: boolean): boolean{
    if(typeof this.items[item.id] === "undefined" || this.items[item.id] == null){
      this.items[item.id] = item;

      return true;
    }else if(force){
      this.items[item.id] = item;

      return true;
    }

    return false;
  }

  /**
   * Get an item by its `id`
   *
   * @param id A string of the `id` to fetch.
   * @return The item object or null if it does not exist.
   */
  getItem(id: string): Item | null{
    if(this.items[id] !== undefined && this.items[id] !== null){
      return this.items[id];
    }

    return null;
  }

  /**
   * Returns the list of items.
   *
   * @return The list of items (not null)
   */
  getItemList(): Item[]{
    var array_of_items: Item[] = [];

    for(const id in this.items){
      array_of_items.push(this.items[id]);
    }

    return array_of_items || [];
  }

  /**
   * @return A JSON-string of this object and all its properties as an IIIF manifest.
   */
  toJSONString(): string{
    // Softcloning helps to preserve references but copy properties.
    // i.e. all functions stay intact.
    var obj = lib.softClone(this);
    var labelString: { [s: string]: any } = {"label": obj.label.getObject()};

    // Overrides the label object with a label string.
    // Makes it look really nice for the JSON and gets rid
    // of that icky class inheritance crap.
    obj = Object.assign(obj, labelString);

    return JSON.stringify(obj);
  }
}
