import ILabel from "./interfaces/ILabel";

// TODO: Actually make the labels be able to have
// multiple languages. Not important now.
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

  /**
   * Returns this label as a properly formatted "label" manifest object
   * rather than a stringified version of this class.
   */
  getObject(): { [s: string]: string[] }{
    var obj: { [s: string]: string[] } = {};
    obj[this.languageCode] = this.values;

    return obj;
  }

  /**
   * Returns this label as a properly formatted "label" manifest object string
   * rather than a stringified version of this class.
   */
  toJSONString(): string {
    var obj: { [s: string]: string[] } = {};
    obj[this.languageCode] = this.values;

    return JSON.stringify(obj);
  }
}
