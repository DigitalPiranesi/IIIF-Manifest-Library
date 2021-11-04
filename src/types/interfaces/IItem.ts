import IJSONAble from "./IJSONAble";
import Item from "../Item";

/**
 * Abstract interface for anything Itemizable.
 */
export default interface IItem extends IJSONAble {
  id: string;
  readonly type: string;
  items?: Item[];

  toJSONString(): string;
  getItems(): Item[];
}
