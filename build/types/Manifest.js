"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib");
var Label_1 = __importDefault(require("./Label"));
var Manifest = /** @class */ (function () {
    /**
     * Construct a new instance of Manifest
     *
     * @param contextVersion The version of the IIIF standard to use. Must be a number
     * @param id The unique URI for this manifest (where it can be found hosted).
     */
    function Manifest(contextVersion, id) {
        this.id = "";
        this.type = "Manifest";
        this.items = [];
        lib.ASSERT(contextVersion !== undefined);
        lib.ASSERT(id !== undefined);
        var context = { "@context": "http://iiif.io/api/presentation/" + contextVersion + "/context.json" };
        Object.assign(this, context);
        this.id = id;
        this.label = new Label_1.default("en");
    }
    /**
     * Add label to this manifest.
     *
     * @param label The label to add to the manifest (must not be null). //getLabel already determines if undefined?
     */
    Manifest.prototype.addLabel = function (label) {
        this.label = label;
    };
    /**
     * Removes label from manifest, makes label undefined
     *
     * @return The prior instance of label
     */
    Manifest.prototype.removeLabel = function () {
        if (this.label !== undefined) {
            var previous = this.label;
            this.label = null;
            return previous;
        }
        else {
            return null;
        }
    };
    /**
     * Get the label associated with this manifest or null.
     *
     * @see src/types/Label.ts
     * @return The instance of Label or null if it does not exist.
     */
    Manifest.prototype.getLabel = function () {
        if (this.label !== undefined) {
            return this.label;
        }
        else {
            return null;
        }
    };
    // TODO: Maybe make this better?
    Manifest.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // TODO: Return something.
    Manifest.prototype.getItem = function () { };
    /**
     * @return A JSON-string of this object and all its properties as an IIIF manifest.
     */
    Manifest.prototype.toJSONString = function () {
        // Softcloning helps to preserve references but copy properties.
        // i.e. all functions stay intact.
        var obj = lib.softClone(this);
        var labelString = { "label": obj.label.getObject() };
        // Overrides the label object with a label string.
        // Makes it look really nice for the JSON and gets rid
        // of that icky class inheritance crap.
        obj = Object.assign(obj, labelString);
        return JSON.stringify(obj);
    };
    return Manifest;
}());
exports.default = Manifest;
