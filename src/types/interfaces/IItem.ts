import IJSONAble from "./IJSONAble";

/**
 * Abstract interface for anything Itemizable.
 */
export default interface IItem extends IJSONAble {
  id: string;
  readonly type: string;
  items?: IItem[];

  toJSONString(): string;
  addItem(item: IItem): void;
  removeItem(item: IItem): void;
}
