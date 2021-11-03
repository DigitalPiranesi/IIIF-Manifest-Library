import IJSONAble from "./interfaces/IJSONAble";
import IItem from "./interfaces/IItem";

export default class ItemList {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   */
  items: Map<string, IItem>;

  constructor(){
    this.items = new Map<string, IItem>();
  }

  /**
   * Adds item to the list
   * 
   * @param item
   */
  addItem(item: IItem){
    this.items.set(item.id, item);
  }

  /**
   * Returns item according to ID
   * 
   * @param id 
   * @returns item connected with ID or undefined
   */
  getItem(id: string): IItem | undefined {
    return this.items.get(id);
  }

  /**
   * Removes item from list
   * 
   * @param item 
   * @returns boolean whether successfully deleted
   */
  removeItem(item: IItem | string): boolean{
    if(typeof item === "string"){
      return this.items.delete(item);
    }else{
      return this.items.delete(item.id);
    }
  }

  toJSONObject(): any[] {
    var arr = [] as any;

    for(const item in this.items.values()){
      arr.push(item);
    }

    return arr;
  }
}
