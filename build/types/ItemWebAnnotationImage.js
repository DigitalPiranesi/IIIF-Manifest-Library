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
var lib = require("../lib");
var ItemWebAnnotation_1 = __importDefault(require("./ItemWebAnnotation"));
/**
 * This is an implemention of the W3 Web Annotation specification for displaying
 * an image as an annotation on a `Canvas`.
 *
 * @author Clio Lang, Walter Pach
 * @since 0.1
 */
var WebAnnotationImage = /** @class */ (function (_super) {
    __extends(WebAnnotationImage, _super);
    /**
     * Create a new instance of `ItemWebAnnotationImage`
     *
     * @param id The unique ID of this annotation
     * @param motivation The motivation for this annotation
     * @param canvas The canvas object (or its `id`) to which this will be bound.
     * @param imageURL The URL of the image (must be referencable)
     * @param width The width of the image to display in pixels (does not have to match actual file)
     * @param height The height of the image to display in pixels (does not have to match actual file)
     */
    function WebAnnotationImage(id, motivation, canvas, imageURL, width, height) {
        var _this = _super.call(this, id, motivation, (typeof canvas === "string" ? canvas : canvas.id)) || this;
        _this.body = {
            id: "",
            type: "Image",
            format: "",
            height: -1,
            width: -1
        };
        if (WebAnnotationImage.getMIMEFromURL(imageURL) == null) {
            throw Error("Provided URL for image does not reference to an image format.");
        }
        _this.reformatBody(imageURL, width, height);
        return _this;
    }
    /**
     * Provides a helper function for decoding the MIME from a file extension.
     *
     * @see https://iiif.io/api/image/3.0/#45-format
     * @param url A string of indeterminate length ending with a file extension.
     * @returns The MIME string for this extension or null if there is none.
     */
    WebAnnotationImage.getMIMEFromURL = function (url) {
        switch (lib.getURLExtension(url)) {
            case "jpg":
            case "jpeg":
                return "image/jpeg";
            case "tif":
                return "image/tiff";
            case "png":
                return "image/png";
            case "gif":
                return "image/gif";
            case "jp2":
                return "image/jp2";
            case "pdf":
                return "application/pdf";
            case "webp":
                return "image/webp";
            default:
                return null;
        }
    };
    /**
     * Reformat the body object of this annotation.
     *
     * @param id The new `id` of the annotation
     * @param width The new width
     * @param height The new height
     */
    WebAnnotationImage.prototype.reformatBody = function (id, width, height) {
        this.body.id = id;
        this.body.format = WebAnnotationImage.getMIMEFromURL(id) || "";
        this.body.width = width;
        this.body.height = height;
    };
    return WebAnnotationImage;
}(ItemWebAnnotation_1.default));
exports.default = WebAnnotationImage;
