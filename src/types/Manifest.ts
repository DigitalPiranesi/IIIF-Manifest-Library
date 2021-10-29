var lib = require("@lib");

import Label from "./Label";
import IJSONAble from "./interfaces/IJSONAble";
import Item from "./Item";

export default class Manifest implements IJSONAble {
  id = "";
  readonly type: string = "Manifest";
  label: Label;
  items = [] as Item[];

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
   * @param label The label to add to the manifest (must not be null).
   */
  addLabel(label: Label){
    this.label = label;
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

  // TODO: Maybe make this better?
  addItem(item: Item){
    this.items.push(item);
  }

  // TODO: Return something.
  getItem(){}

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
