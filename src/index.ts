/**
 * This file exists to standardize the import and export of the entire library
 * via one import. Gulp and Webpack will package and resolve all references
 * and allow for the import statements to populate the library as needed.
 *
 * The build process facilitates package with both NodeJS and Webpack formats
 * which allows this to be standardized as a single export statement.
 *
 * All new library classes and methods ought to be exported here.
 */
import Item from "./types/Item";
import ItemAnnotation from "./types/ItemAnnotation";
import ItemAnnotationPage from "./types/ItemAnnotationPage";
import ItemCanvas from "./types/ItemCanvas";
import ItemTextualAnnotation from "./types/ItemTextualAnnotation";
import ItemWebAnnotation from "./types/ItemWebAnnotation";
import ItemWebAnnotationPage from "./types/ItemWebAnnotationPage";
import ItemWebAnnotationImage from "./types/ItemWebAnnotationImage";
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import EnumAnnotationMotivation from "./types/enums/EnumAnnotationMotivation";
import EnumManifestBehavior from "./types/enums/EnumManifestBehavior";
import EnumWebAnnotationMotivation from "./types/enums/EnumWebAnnotationMotivation";
import IItem from "./types/interfaces/IItem";
import IJSONAble from "./types/interfaces/IJSONAble";
import ILabel from "./types/interfaces/ILabel";

/**
 * Default exports for the library.
 */
export {
  Item,
  ItemAnnotation,
  ItemAnnotationPage,
  ItemCanvas,
  ItemTextualAnnotation,
  ItemWebAnnotation,
  ItemWebAnnotationPage,
  ItemWebAnnotationImage,
  Label,
  Manifest,
  EnumAnnotationMotivation,
  EnumWebAnnotationMotivation,
  EnumManifestBehavior
};
