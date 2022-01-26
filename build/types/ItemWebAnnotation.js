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
/**
 *
 */
var ItemWebAnnotation = /** @class */ (function (_super) {
    __extends(ItemWebAnnotation, _super);
    /**
     * Create a new instance of a W3-compatible web annotation.
     *
     * @param id The id of this annotation
     * @param motivation The motivation of this annotation
     * @param target The target of this annotation (typically a canvas/annotation-page)
     * @param context (Optional) specification of additional contexts (includes W3 Web Annotation context by default).
     */
    function ItemWebAnnotation(id, motivation, target, context) {
        var _this = _super.call(this, id, context) || this;
        _this.type = "Annotation";
        _this.addContext("http://www.w3.org/ns/anno.jsonld");
        _this.motivation = motivation;
        _this.target = target;
        return _this;
    }
    /**
     * Set the target of this annotation
     *
     * @param target The ID of a target as a string.
     */
    ItemWebAnnotation.prototype.setTarget = function (target) {
        this.target = target;
    };
    /**
     * Set the body of the annotation forcefully.
     * NOTE: This should be done via implementation, but for simplicity can be done
     * programatically here.
     *
     * @param body The object to which to set the body equal.
     */
    ItemWebAnnotation.prototype.setBody = function (body) {
        this.body = body;
    };
    /**
     * Remove the body of the annotation.
     *
     * @return True if successful, false if it never existed to start with.
     */
    ItemWebAnnotation.prototype.removeBody = function () {
        if (typeof this.body !== "undefined") {
            delete this.body;
            return true;
        }
        return false;
    };
    ItemWebAnnotation.prototype.toJSONString = function () {
        return JSON.stringify(this);
    };
    return ItemWebAnnotation;
}(Item_1.default));
exports.default = ItemWebAnnotation;
