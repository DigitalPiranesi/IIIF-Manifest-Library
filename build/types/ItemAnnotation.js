"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __importDefault(require("./Item"));
var lib = require("../lib");
/**
 * Main class for what one may traditionally think of as "annotations", especially
 * considered canvas markup.
 *
 * @since 0.1
 * @author Walter Pach, Clio Lang
 * @see ItemWebAnnotation for the W3 Annotation equivalent.
 */
var ItemAnnotation = /** @class */ (function (_super) {
    __extends(ItemAnnotation, _super);
    /**
     * Create a new instance of ItemAnnotation (only used by `super()`)
     *
     * @param id The `id` of this annotation
     * @param motivation The motivation for this annotation
     * @param target Optional target to another piece of the viewer. Must be formatted as a string.
     */
    function ItemAnnotation(id, motivation, target) {
        var _this = _super.call(this, id, undefined) || this;
        _this.type = "Annotation";
        _this.addContext("http://www.w3.org/ns/anno.jsonld");
        _this.motivation = motivation;
        if (lib.isDefined(target)) {
            _this.target = target;
        }
        return _this;
    }
    /**
     * Set the target of this annotation
     *
     * @param target The target as a string.
     */
    ItemAnnotation.prototype.setTarget = function (target) {
        this.target = target;
    };
    /**
     * Get the target of this annotation if it exists.
     *
     * @return The target as a string or null if it does not exist.
     */
    ItemAnnotation.prototype.getTarget = function () {
        if (lib.isDefined(this.target)) {
            return this.target || null;
        }
        else {
            return null;
        }
    };
    /**
     * Set the body of this annotation to an object.
     * NOTE: This does not neccessarily do anything unless used correctly.
     *
     * @param body The object to set.
     */
    ItemAnnotation.prototype.setBody = function (body) {
        this.body = body;
    };
    /**
     * Get the body of this annotation.
     *
     * @return The body if it exists, `undefined` if it does not.
     */
    ItemAnnotation.prototype.getBody = function () {
        return this.body || undefined;
    };
    /**
     * @return A JSON-string of this object and all its properties.
     */
    ItemAnnotation.prototype.toJSONString = function () {
        return JSON.stringify(this);
    };
    return ItemAnnotation;
}(Item_1.default));
exports.default = ItemAnnotation;
