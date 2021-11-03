import IJSONAble from "./IJSONAble";

/**
 * The ILabel interface provides the architecture for
 * the "label" property in the manifest.
 *
 * According to IIIF v3, a label can have a value of the
 * localisation code for the language and an array of strings
 * as the value.
 */
export default interface ILabel extends IJSONAble {
  values: string[];
}
