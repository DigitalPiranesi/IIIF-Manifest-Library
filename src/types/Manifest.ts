var lib = require("@lib");

import Label from "./Label";
import * as Lib from "../lib";

class Manifest implements Lib.IJSONAble {
  _context = "";
  id = "";
  readonly type = "Manifest";
  label?: Label;
  items = [];

  /**
   * Construct a new instance of Manifest
   *
   * @param contextVersion The version of the IIIF standard to use. Must be a number
   * @param id The unique URI for this manifest (where it can be found hosted).
   */
  constructor(contextVersion: number, id: string){
    lib.ASSERT(contextVersion !== undefined);
    lib.ASSERT(id !== undefined);

    this._context = "http://iiif.io/api/presentation/" + contextVersion + "/context.json";
    this.id = id;
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

  // TODO: Add type/interface for Item
  addItem(){}
  getItem(){}

  toJSONString(): string{
    return JSON.stringify(this);
  }
}
