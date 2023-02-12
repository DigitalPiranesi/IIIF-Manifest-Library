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
import IJSONAble from "./interfaces/IJSONAble";
import IItem from "./interfaces/IItem";
var lib = require("../lib");

/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
export default abstract class Item implements IItem, IJSONAble{
  /* Once the URI is set it should not be allowed to be modified. */
  readonly id: string;

  /* Once the IIIF type is declared for each item it should not be allowed to be
     modified */
  abstract readonly type: string;

  /* Sub-items (i.e. what is just the general "items" array that always pops up)
     in the manifests */
  items: Item[];

  /**
   * The motivation property is on some but not all items.
   *
   * The question mark allows it to be an optional property.
   */
  readonly motivation?: string;

  /* This notation just allows for us to use the `@` symbol at the beginning of a variable name */
  [ "@context" ]?: string | string[];

  /**
   * Create an instance of item.
   *
   * @param id The URL for this item.
   * @param context The context of this item, as a single or array of URLs as strings (optional)
   */
  constructor(id: string, context: string | string[] | undefined){
    this.id = id;
    this.items = [] as Item[];

    if(typeof context !== "undefined"){
      this["@context"] = context;
    }
  }

  /**
   * Add an item to the array of sub-items.
   *
   * @note This method can be overriden if desired.
   * @param item The item to add to the list.
   */
  addItem(item: Item): void{
    this.items.push(item);
  }

  /**
   * Add URL to this item's context (handles array creation if new array).
   *
   * @param context A URL string referencing the context file.
   */
  addContext(context: string){
    /* This simply creates the property if it doesn't exist yet. */
    if(typeof this["@context"] === "undefined"){
      this["@context"] = context;
      return;
    }

    if(Array.isArray(this["@context"])){
      this["@context"].push(context);
    }else{
      var arr = [];

      arr.push(this["@context"]);
      arr.push(context);
      this["@context"] = arr;
    }
  }

  /**
   * Remove an item from the array of sub-items.
   *
   * @param item The item to remove if it exists.
   */
  removeItem(item: Item): void{
    this.items.forEach((element, index)=> {
      if(element.id == item.id){
        delete this.items[index];
      }else{
        console.log("Unable to find annotationPage to delete")
      }
    });
  }

  /**
   * Get all the items attached to this item.
   *
   * @return A reference to the array of items.
   */
  getItems(): Item[]{
    return this.items;
  }

  /**
   * Turn this class into a JSON string.
   *
   * @return A JSON string.
   */
  toJSONString(): string {
    return JSON.stringify(this.items);
  }
}
