"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumManifestBehavior = exports.EnumWebAnnotationMotivation = exports.EnumAnnotationMotivation = exports.Manifest = exports.Label = exports.ItemWebAnnotationImage = exports.ItemWebAnnotationPage = exports.ItemWebAnnotation = exports.ItemTextualAnnotation = exports.ItemCanvas = exports.ItemAnnotationPage = exports.ItemAnnotation = exports.Item = void 0;
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
var Item_1 = __importDefault(require("./types/Item"));
exports.Item = Item_1.default;
var ItemAnnotation_1 = __importDefault(require("./types/ItemAnnotation"));
exports.ItemAnnotation = ItemAnnotation_1.default;
var ItemAnnotationPage_1 = __importDefault(require("./types/ItemAnnotationPage"));
exports.ItemAnnotationPage = ItemAnnotationPage_1.default;
var ItemCanvas_1 = __importDefault(require("./types/ItemCanvas"));
exports.ItemCanvas = ItemCanvas_1.default;
var ItemTextualAnnotation_1 = __importDefault(require("./types/ItemTextualAnnotation"));
exports.ItemTextualAnnotation = ItemTextualAnnotation_1.default;
var ItemWebAnnotation_1 = __importDefault(require("./types/ItemWebAnnotation"));
exports.ItemWebAnnotation = ItemWebAnnotation_1.default;
var ItemWebAnnotationPage_1 = __importDefault(require("./types/ItemWebAnnotationPage"));
exports.ItemWebAnnotationPage = ItemWebAnnotationPage_1.default;
var ItemWebAnnotationImage_1 = __importDefault(require("./types/ItemWebAnnotationImage"));
exports.ItemWebAnnotationImage = ItemWebAnnotationImage_1.default;
var Label_1 = __importDefault(require("./types/Label"));
exports.Label = Label_1.default;
var Manifest_1 = __importDefault(require("./types/Manifest"));
exports.Manifest = Manifest_1.default;
var EnumAnnotationMotivation_1 = __importDefault(require("./types/enums/EnumAnnotationMotivation"));
exports.EnumAnnotationMotivation = EnumAnnotationMotivation_1.default;
var EnumManifestBehavior_1 = __importDefault(require("./types/enums/EnumManifestBehavior"));
exports.EnumManifestBehavior = EnumManifestBehavior_1.default;
var EnumWebAnnotationMotivation_1 = __importDefault(require("./types/enums/EnumWebAnnotationMotivation"));
exports.EnumWebAnnotationMotivation = EnumWebAnnotationMotivation_1.default;
