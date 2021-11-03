"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
     */
    function Item(id, context) {
        this.id = id;
        this.items = [];
        if (context !== undefined) {
            var context_obj = { "@context": context };
            Object.assign(this, context_obj);
        }
    }
    /**
     * Add an item to the array of sub-items.
     *
     * @param item The item to add to the list.
     * @note This method can be overriden if desired.
     */
    Item.prototype.addItem = function (item) {
        this.items.push(item);
    };
    /**
     * Remove an item from the array of sub-items.
     *
     * @param item The item to remove if it exists.
     */
    Item.prototype.removeItem = function (item) {
        if (this.items.indexOf(item) > 0) {
            delete this.items[this.items.indexOf(item)];
        }
    };
    /**
     * Turn this class into a JSON string.
     *
     * @return A JSON string.
     */
    Item.prototype.toJSONString = function () {
        return JSON.stringify(this);
    };
    return Item;
}());
exports.default = Item;
