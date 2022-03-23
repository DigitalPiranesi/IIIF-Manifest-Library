"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib");
/**
 * Abstract class for an "item" as an umbrella idea. Anything can be an item,
 * it is just a convenient type to store methods such as adding and removing child
 * items.
 */
var Item = /** @class */ (function () {
    /**
     * Create an instance of item.
     *
     * @param id The URL for this item.
     * @param context The context of this item, as a single or array of URLs as strings (optional)
     */
    function Item(id, context) {
        this.id = id;
        this.items = [];
        if (typeof context !== "undefined") {
            this["@context"] = context;
        }
    }
    /**
     * Add an item to the array of sub-items.
     *
     * @note This method can be overriden if desired.
     * @param item The item to add to the list.
     */
    Item.prototype.addItem = function (item) {
        this.items.push(item);
    };
    /**
     * Add URL to this item's context (handles array creation if new array).
     *
     * @param context A URL string referencing the context file.
     */
    Item.prototype.addContext = function (context) {
        /* This simply creates the property if it doesn't exist yet. */
        if (typeof this["@context"] === "undefined") {
            this["@context"] = context;
            return;
        }
        if (Array.isArray(this["@context"])) {
            this["@context"].push(context);
        }
        else {
            var arr = [];
            arr.push(this["@context"]);
            arr.push(context);
            this["@context"] = arr;
        }
    };
    /**
     * Remove an item from the array of sub-items.
     *
     * @param item The item to remove if it exists.
     */
    Item.prototype.removeItem = function (item) {
        var _this = this;
        this.items.forEach(function (element, index) {
            if (element.id == item.id) {
                delete _this.items[index];
            }
            else {
                console.log("Unable to find annotationPage to delete");
            }
        });
    };
    /**
     * Get all the items attached to this item.
     *
     * @return A reference to the array of items.
     */
    Item.prototype.getItems = function () {
        return this.items;
    };
    /**
     * Turn this class into a JSON string.
     *
     * @return A JSON string.
     */
    Item.prototype.toJSONString = function () {
        return JSON.stringify(this.items);
    };
    return Item;
}());
exports.default = Item;
