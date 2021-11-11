var lib = require("../lib");
import ILabel from "./interfaces/ILabel";

/**
 * Provides the label mapping interface needed to satisfy a manifest's label.
 * The label uses a map of two-character language codes to arrays of possible
 * values.
 *
 * @see Map
 * @usage
 * ```
 * var label = new Label();
 * label.addValue('en', ['Hello world!', 'Hi world!']);
 * label.addValue('fr', 'Bonjour, monde!');
 * ```
 */
export default class Label{
  languageMap: Map<string, string[]>;

  /**
   * Creates a new instance of label.
   *
   * @param languageCode The two-character language code for this label
   * @param values Optional, pre-defined values to insert.
   */
  constructor(languageCode?: string, values?: string[]){
    this.languageMap = new Map<string, string[]>();

    if(languageCode !== undefined){
      this.languageMap.set(languageCode, values || []);
    }
  }

  /**
   * This functions adds an entire language to the label, with the option of an
   * array of strings.
   *
   * @param languageCode The two-character code for the language. See https://github.com/ladjs/i18n-locales for a list of them.
   * @param value Either a single string or an array of strings to which to set the label for this language.
   * @return
   */
  addValue(languageCode: string, value: string | string[]): string[]{
    var _array = this.languageMap.get(languageCode);

    if(_array !== undefined){
      lib.addAll(_array, value);
    }else{
      _array = [];

      lib.addAll(_array, value)
      this.languageMap.set(languageCode, _array);
    }

    return _array;
  }

  /**
   * Removes all of the strings associated with a specific language.
   *
   * @param languageCode The two-character language code to remove.
   * @return True if successful, false otherwise.
   */
  removeLabel(languageCode: string): boolean {
    return this.languageMap.delete(languageCode);
  }

  /**
   * Fetches all of the strings for a specific language code.
   *
   * @param languageCode The two-character language code.
   * @return An array of the strings associated with that language or null if it is unset.
   */
  getValues(languageCode: string): string[] | null {
    return this.languageMap.get(languageCode) || null;
  }

  /**
   * Fetches the entire collection of languages and strings as a single object.
   *
   * @return An array of `{"--": [ ] }` objects where "--" is the two character language code.
   */
  getObject(): {[s: string]: string[] } {
    var array_of_values: any = {};

    for(const key of this.languageMap.keys()){
      var element: string[] = this.languageMap.get(key) || [];
      var key1: any = key;

      if(element.length === undefined && element.length <= 0){
        continue;
      }

      array_of_values[key1] = element;
      console.log(array_of_values[key1]);
    }

    return array_of_values;
  }

  /**
   * Returns this label as a properly formatted `label` manifest object string
   * rather than a stringified version of this class.
   */
  toJSONString(): string{
    return JSON.stringify(this.getObject());
  }
}
