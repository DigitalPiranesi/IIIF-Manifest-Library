/*
 * Copyright 2023 The University of South Carolina
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lib = require("../lib");

import Label from "./Label";
import IJSONAble from "./interfaces/IJSONAble";
import IItem from "./interfaces/IItem";
import Item from "./Item";
import EnumManifestBehavior from "./enums/EnumManifestBehavior";

export default class Manifest implements IJSONAble {
  [ "@context" ]?: string | string[];
  id = "";
  readonly type: string = "Manifest";
  label: Label | null;
  items: Item[];
  behavior?: EnumManifestBehavior[] | EnumManifestBehavior;

  /**
   * Construct a new instance of Manifest
   *
   * @param contextVersion The version of the IIIF standard to use. Must be a number
   * @param id The unique URI for this manifest (where it can be found hosted).
   */
  constructor(contextVersion: number, id: string){
    lib.ASSERT(contextVersion !== undefined);
    lib.ASSERT(id !== undefined);

    this["@context"] = "http://iiif.io/api/presentation/" + contextVersion + "/context.json";
    this.id = id;
    this.label = new Label("en");
    this.items = [] as Item[];
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
      const previous = this.label;
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
  addItem(item: Item): void{
    this.items.push(item);
  }

  /**
   * Get an item by its `id`
   *
   * @param id A string of the `id` to fetch.
   * @return The item object or null if it does not exist.
   */
  getItem(id: string): Item | null{
    for(const item of this.items){
      if(item.id === id){
        return item;
      }
    }

    return null;
  }

  /**
   * Returns the list of items.
   *
   * @return The list of items (not null)
   */
  getItemList(): Item[]{
    return this.items;
  }

  /**
   * Set the behavior of this manifest (accepts an array of values)
   *
   * @param behavior The behavior to set.
   */
  setBehavior(behavior: EnumManifestBehavior | EnumManifestBehavior[]){
    if(!lib.isDefined(this.behavior)){
      this.behavior = behavior;
    }else{
      this.behavior = behavior;
    }
  }

  /**
   * @return A JSON-string of this object and all its properties as an IIIF manifest.
   */
  toJSONString(): string{
    // Softcloning helps to preserve references but copy properties.
    // i.e. all functions stay intact.
    let obj = lib.softClone(this);
    const labelString: { [s: string]: any } = {"label": obj.label.getObject()};
    const itemString: { [s: string]: any } = {"items": this.items};

    // Overrides the label object with a label string.
    // Makes it look really nice for the JSON and gets rid
    // of that icky class inheritance crap.
    obj = Object.assign(obj, labelString);
    obj = Object.assign(obj, itemString);

    return JSON.stringify(obj);
  }
}
