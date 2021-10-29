import { ILabel } from "./interfaces/ILabel";

export default class Label implements ILabel {
  languageCode: string;
  values: string[];

  /**
   * @param languageCode The two-character language code for this label
   * @param values Optional, pre-defined values to insert.
   */
  constructor(languageCode: string, values?: string[]){
    this.languageCode = languageCode;
    this.values = values || [];
  }

  addValue(value: string): void{
    this.values.push(value);
  }

  getValues(): string[]{
    return this.values;
  }

  toJSONString(): string {
    var obj: { [s: string]: string[] } = {};
    obj[this.languageCode] = this.values;

    return JSON.stringify(obj);
  }
}
