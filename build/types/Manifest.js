"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
        lib.ASSERT(contextVersion !== undefined);
        lib.ASSERT(id !== undefined);
        this["@context"] = "http://iiif.io/api/presentation/" + contextVersion + "/context.json";
        this.id = id;
        this.label = new Label_1.default("en");
        this.items = [];
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
    /**
     * Add an item to the item list. Same `id` must not exist or the function will
     * fail unless `force` is set.
     *
     * @param item The item to add
     * @param force (Optional) If true, the function will override the existing entry with the same `id`.
     * @return True if insertion was successful, false if not.
     */
    Manifest.prototype.addItem = function (item) {
        this.items.push(item);
    };
    /**
     * Get an item by its `id`
     *
     * @param id A string of the `id` to fetch.
     * @return The item object or null if it does not exist.
     */
    Manifest.prototype.getItem = function (id) {
        var e_1, _a;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.id === id) {
                    return item;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * Returns the list of items.
     *
     * @return The list of items (not null)
     */
    Manifest.prototype.getItemList = function () {
        return this.items;
    };
    /**
     * Set the behavior of this manifest (accepts an array of values)
     *
     * @param behavior The behavior to set.
     */
    Manifest.prototype.setBehavior = function (behavior) {
        if (!lib.isDefined(this.behavior)) {
            this.behavior = behavior;
        }
        else {
            this.behavior = behavior;
        }
    };
    /**
     * @return A JSON-string of this object and all its properties as an IIIF manifest.
     */
    Manifest.prototype.toJSONString = function () {
        // Softcloning helps to preserve references but copy properties.
        // i.e. all functions stay intact.
        var obj = lib.softClone(this);
        var labelString = { "label": obj.label.getObject() };
        var itemString = { "items": this.items };
        // Overrides the label object with a label string.
        // Makes it look really nice for the JSON and gets rid
        // of that icky class inheritance crap.
        obj = Object.assign(obj, labelString);
        obj = Object.assign(obj, itemString);
        return JSON.stringify(obj);
    };
    return Manifest;
}());
exports.default = Manifest;
