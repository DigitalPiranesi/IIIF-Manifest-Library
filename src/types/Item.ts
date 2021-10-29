import IJSONAble from "./interfaces/IJSONAble";
import IItem from "./interfaces/IItem";

/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
export default abstract class Item implements IItem, IJSONAble{
  // Once the URI is set it should not be allowed to be modified.
  readonly id: string;

  /* Once the IIIF type is declared for each item it should not be allowed to be
     modified */
  abstract readonly type: string;

  /* Sub-items (i.e. what is just the general "items" array that always pops up)
     in the manifests */
  items: IItem[];

  /**
   * The motivation property is on some but not all items.
   *
   * The question mark allows it to be an optional property.
   */
  readonly motivation?: string;

  /**
   * Create an instance of item.
   *
   * @param id The URL for this item.
   */
  constructor(id: string, context: string | string[] | undefined){
    this.id = id;
    this.items = [] as IItem[];

    if(context !== undefined){
      var context_obj:any = {"@context": context};
      Object.assign(this, context_obj);
    }
  }

  /**
   * Add an item to the array of sub-items.
   *
   * @param item The item to add to the list.
   * @note This method can be overriden if desired.
   */
  addItem(item: IItem): void{
    this.items.push(item);
  }

  /**
   * Remove an item from the array of sub-items.
   *
   * @param item The item to remove if it exists.
   */
  removeItem(item: IItem): void{
    if(this.items.indexOf(item) > 0){
      delete this.items[this.items.indexOf(item)];
    }
  }

  /**
   * Turn this class into a JSON string.
   *
   * @return A JSON string.
   */
  toJSONString(): string {
    return JSON.stringify(this);
  }
}
