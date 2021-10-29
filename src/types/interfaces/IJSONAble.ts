/**
 * Abstract interface for anything that can be converted to a JSON string.
 */
export default interface IJSONAble {
  toJSONString(): string;
}
