"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.items = new Map();
    }
    ItemList.prototype.addItem = function (item) {
        this.items.set(item.id, item);
    };
    ItemList.prototype.getItem = function (id) {
        return this.items.get(id);
    };
    ItemList.prototype.removeItem = function (item) {
        if (typeof item === "string") {
            return this.items.delete(item);
        }
        else {
            return this.items.delete(item.id);
        }
    };
    ItemList.prototype.toJSONObject = function () {
        var arr = [];
        for (var item in this.items.values()) {
            arr.push(item);
        }
        return arr;
    };
    return ItemList;
}());
exports.default = ItemList;
