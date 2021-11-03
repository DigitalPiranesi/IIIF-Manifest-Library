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
 * This is the type for the IIIF type "Canvas".
 */
var ItemCanvas = /** @class */ (function (_super) {
    __extends(ItemCanvas, _super);
    /**
     * Create a new instance of Canvas
     *
     * @param id The URI where this canvas is referenced.
     * @param width The width of this canvas.
     * @param height The height of this canvas.
     */
    function ItemCanvas(id, width, height) {
        var _this = _super.call(this, id, undefined) || this;
        _this.type = "Canvas";
        _this.width = width;
        _this.height = height;
        return _this;
    }
    ItemCanvas.prototype.toJSONString = function () {
        return JSON.stringify(this);
    };
    return ItemCanvas;
}(Item_1.default));
exports.default = ItemCanvas;
